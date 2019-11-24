#!/bin/bash

# code from https://github.com/mddub/git-to-beeminder

# getting info from .env file
echo "start git-to-beeminder"

source ./scripts/.env # path changed because we launch from npm scripts
BEEMINDER_USERNAME=$BEEMINDER_USERNAME
BEEMINDER_GOAL=$BEEMINDER_GOAL
BEEMINDER_AUTH_TOKEN=$BEEMINDER_AUTH_TOKEN

# Optional
BEEMINDER_MESSAGE_PREFIX=""

source ./scripts/git-to-beeminder.sh