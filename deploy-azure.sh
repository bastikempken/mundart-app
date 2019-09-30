#!/bin/bash
readonly ZIP_FILE=deploy-content.zip
# clear zip
rm $ZIP_FILE

# Build source
npm install
npm run build-client

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