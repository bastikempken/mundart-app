#!/bin/bash
readonly CONATAINER_TAG=mundart-webapp
docker build -t $CONATAINER_TAG .

#build tag
tag_description='DOCKER_BUILD_'$(date +'%Y_%m_%d_%H_%M_%S')
git tag -a $tag_description -m "'"$tag_description"'"
git push origin $tag_description


