#!/bin/bash
readonly CONATAINER_TAG=mundart-app
readonly PACKAGE_VERSION=$(node -p -e "require('./package.json').version")

docker build -t $CONATAINER_TAG:$PACKAGE_VERSION .

#build tag
tag_description='DOCKER_BUILD_'$(date +'%Y_%m_%d_%H_%M_%S')
#git tag -a $tag_description -m "'"$tag_description"'"
#git push origin $tag_description


