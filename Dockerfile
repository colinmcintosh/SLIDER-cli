# syntax=docker/dockerfile:1

# ---- Build stage ----------------------------------------------------------
# Compile a fully static, CGO-free binary. All dependencies are pure Go and the
# web UI is embedded via //go:embed, so the resulting binary is self-contained.
FROM golang:1.21-alpine AS build

WORKDIR /src

# Download modules first so this layer is cached unless go.mod/go.sum change.
COPY go.mod go.sum ./
RUN go mod download

# Build metadata, mirrors the values the Makefile injects via ldflags.
ARG VERSION=docker
ARG BUILD_TIME=unknown

COPY . .

ENV CGO_ENABLED=0 GOOS=linux
RUN go build -trimpath \
        -ldflags "-s -w -X main.Version=${VERSION} -X main.BuildTime=${BUILD_TIME}" \
        -o /out/slider-cli .

# ---- Runtime stage --------------------------------------------------------
# distroless/static:nonroot has no shell or package manager (minimal attack
# surface), bundles CA certificates (required for outbound HTTPS to the upstream
# SLIDER server) and tzdata, and runs as a non-root user (UID 65532).
FROM gcr.io/distroless/static:nonroot

COPY --from=build /out/slider-cli /slider-cli

# Durable on-disk tile cache. Mount a host path here to persist cached imagery
# across container restarts/rebuilds.
ENV SLIDER_CACHE=/data/cache
VOLUME ["/data/cache"]

EXPOSE 8080

# --listen=0.0.0.0 is required inside a container; the default 127.0.0.1 would
# make the port unreachable from outside.
ENTRYPOINT ["/slider-cli"]
CMD ["serve", "--listen=0.0.0.0", "--port=8080", "--cache=/data/cache"]
