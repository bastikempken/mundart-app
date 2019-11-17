#!/bin/bash
set -e

readonly CONATAINER_TAG=mundart-app
readonly REMOTE_REPO=sebastiankem/$CONATAINER_TAG

# Build Client
npm run client-install
npm run client-build

npm version major

readonly VERSION=$(node -p -e "require('./package.json').version")
#--
docker build -t $CONATAINER_TAG:$VERSION .
#--
readonly CONATAINER_ID=$(docker images --filter=reference=$CONATAINER_TAG:$VERSION --format "{{.ID}}")

docker tag $CONATAINER_ID $REMOTE_REPO:$VERSION

docker push $REMOTE_REPO
