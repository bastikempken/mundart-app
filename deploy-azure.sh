#!/bin/bash
readonly ZIP_FILE=deploy-content.zip

# clear zip
if [ -f "$ZIP_FILE" ]; then
    rm $ZIP_FILE
fi

# Build source
npm install
npm run client-install
npm run client-build

# Zip
zip -r $ZIP_FILE src/ config.js node_modules/ index.js client/build/ > /dev/null

# Extract credentials
rawUserInput=$(cat deploy-credentials.json | jq '.id | tostring')
rawPasswordInput=$(cat deploy-credentials.json | jq '.password | tostring')
user=${rawUserInput:1:((${#rawUserInput}-2))}
password=${rawPasswordInput:1:((${#rawPasswordInput}-2))}
echo "USER: $user and PASSWORD: $password"

# Deploy to Azure
curl -X POST -u $user:$password https://mundart-test-app.scm.azurewebsites.net/api/zipdeploy -T $ZIP_FILE

rm $ZIP_FILE

# create tag
tag_description='DEPLOYMENT_'$(date +'%Y_%m_%d_%H_%M_%S')
git tag -a $tag_description -m "'"$tag_description"'"
git push origin $tag_description

