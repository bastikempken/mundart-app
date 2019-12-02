#!/bin/bash
set -e
#------------------------
# variables
#------------------------
readonly CONATAINER_TAG=mundart-app
readonly REMOTE_REPO=sebastiankem/$CONATAINER_TAG

#------------------------
# install & build client
#------------------------
npm run client-install
npm run client-build

#------------------------
# version bump
#------------------------
npm version major
readonly VERSION=$(node -p -e "require('./package.json').version")

#------------------------
# build,tag,push docker
#------------------------
docker build -t $CONATAINER_TAG:$VERSION .
readonly CONATAINER_ID=$(docker images --filter=reference=$CONATAINER_TAG:$VERSION --format "{{.ID}}")
docker tag $CONATAINER_ID $REMOTE_REPO:$VERSION
docker push $REMOTE_REPO

#------------------------
# push git
#------------------------
git push origin v$VERSION
