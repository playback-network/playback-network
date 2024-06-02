# Playback Network

https://playback.network

ETHGlobal HACKFS 2024 Submission

AI is amazing except it can’t do anything - ChatGPT doesn’t have hands so I end up doing a lot of manual work that should be automated!

A Large Action Model (LAM) is an artificial intelligence model that can understand and execute complex tasks by translating human intentions into action.

We are giving ChatGPT hands so it can take actions on your devices.

LAMs are a new kind of foundational AI model BUT... there is very little training data. Only around 2000 hours of recordings data is available to train these models which is absurd.

Because of this, all existing LAMs are using In Context Learning, a prompt style where you give an LLM a set of input:output examples but this is severely limited by context window sizes and is far inferior to training an actual model - which we are unlocking with Playback.

Fundamentally we are solving this problem - we are creating a decentralized data marketplace for screen recordings of people completing various tasks.

Our key contributions include:

1. A novel video redaction algorithm that redacts submitted recordings client-side before they leave the device using a combination of OCR and NLP to make output that looks like redacted CIA documents in a Zero Knowledge, privacy preserving way that still enables LAM training
2. Deploying a solution that leverages Zero Knowledge (via SoM) to use a public GPT to price private data
3. A novel pricing algorithm that takes into account the semantic content of submissions and prior submissions to determine how many tokens to reward a submission if any

Decentralizing the data used to train these LAMs would democratise them and enable researchers to improve on the technology at a much faster pace. Moreover we have designed incentive mechanisms to align incentives between contributors and users of the data in such a way that encourages the creation of a massive LAM dataset and enables contributors to participate in the economic upside generated from the models trained on their data.

Our focus for HackFS is to solve the data problem but we intend on also training a decentralized LAM and building a solution that lets you automate complex task execution with a LAM automating actions on your device.

It should feel like minority report when you're using your computer, it's 2024!

## Overview

This project contains the backend, frontend and aimodel in one repo. Our smart contracts and Coophive SoM model are in different repositories.

The Backend uses a serverless approach combining tablesin DynamoDB (noSQL), Graphql endpoints, REST endpoints, and AWS Lambdas. Amplify Gen2 leverages the CDK (see amplify_outputs.json)

## AI model

- Located in the `aimodel` folder
- Backend in the `amplify` folder
- Frontend in the repo: `playbackFrontend` [here](https://github.com/feedback-box/playbackFrontend)

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
