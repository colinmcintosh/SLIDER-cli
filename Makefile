VERSION := "$(shell git describe --tags)-$(shell git rev-parse --short HEAD)"
BUILDTIME := $(shell date -u '+%Y-%m-%dT%H:%M:%SZ')

GOLDFLAGS += -X main.Version=$(VERSION)
GOLDFLAGS += -X main.BuildTime=$(BUILDTIME)
GOFLAGS = -ldflags "$(GOLDFLAGS)"

.PHONY: build release

build: clean
	go build -o slider-cli $(GOFLAGS) .
	./slider-cli --version

check: build test lint

clean:
	rm -f slider-cli
	rm -rf release

godoc:
	godoc -http=":6060"

lint:
	gofmt -w .
	golangci-lint run

release:
	mkdir -p release
	rm -f release/slider-cli release/slider-cli.exe
ifeq ($(shell go env GOOS), windows)
	go build -o release/slider-cli.exe $(GOFLAGS) .
	cd release; zip -m "slider-cli-$(shell git describe --tags --abbrev=0)-$(shell go env GOOS)-$(shell go env GOARCH).zip" slider-cli.exe
else
	go build -o release/slider-cli $(GOFLAGS) .
	cd release; zip -m "slider-cli-$(shell git describe --tags --abbrev=0)-$(shell go env GOOS)-$(shell go env GOARCH).zip" slider-cli
endif
	cd release; sha256sum "slider-cli-$(shell git describe --tags --abbrev=0)-$(shell go env GOOS)-$(shell go env GOARCH).zip" > "slider-cli-$(shell git describe --tags --abbrev=0)-$(shell go env GOOS)-$(shell go env GOARCH).zip.sha256"

sync:
	go get ./...

test:
	go test ./...

usage: build
	./tools/usage.sh