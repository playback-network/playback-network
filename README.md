# Playback Network Backend-Frontend on AWS Amplify Gen2

## Overview

This project contains both the backend and frontend in one repo.
The Backend uses a serverless approach combining tablesin DynamoDB (noSQL), Graphql endpoints, REST endpoints, and AWS Lambdas. Amplify Gen2 leverages the CDK (see amplify_outputs.json)

## Getting started
```
npm i
npm run dev
```
This should start a local dev server at http://localhost:3000.

## Deploying to AWS

For detailed instructions on deploying your application, refer to the [deployment section](https://docs.amplify.aws/nextjs/start/quickstart/nextjs-pages-router/#deploy-a-fullstack-app-to-aws) of our documentation.

## Further reading
https://docs.amplify.aws/nextjs/start/quickstart/nextjs-pages-router/
