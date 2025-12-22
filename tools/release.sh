#!/bin/bash

#
# Copyright (c) 2021 Colin McIntosh
# Author: Colin McIntosh (colin@colinmcintosh.com)
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#

DEFAULT_BRANCH=main
SCOPE=

PARAMS=""
while (("$#")); do
  case "$1" in
  --major)
    SCOPE="major"
    shift
    ;;
  --minor)
    SCOPE="minor"
    shift
    ;;
  --patch)
    SCOPE="patch"
    shift
    ;;
  -*) # unsupported flags
    echo "Error: Unsupported flag $1" >&2
    exit 1
    ;;
  *) # preserve positional arguments
    PARAMS="$PARAMS $1"
    shift
    ;;
  esac
done
eval set -- "$PARAMS"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Pull latest tags and the default branch
if ! git pull --tags origin $DEFAULT_BRANCH; then
  exit 1
fi

# Print the current version
CURRENT=$("$SCRIPT_DIR/semtag" getlast)
echo "Current version: $CURRENT"

# Exit if no scope is set
if [ -z "$SCOPE" ]; then exit 0; fi

# Bump the version
if ! NEXT=$("$SCRIPT_DIR/semtag" final -o -s "$SCOPE"); then
  echo "$NEXT"
  exit 2
fi
echo "Next version: $NEXT"
if ! "$SCRIPT_DIR/semtag" final -s "$SCOPE"; then
  exit 3
fi
