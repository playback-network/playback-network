import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any user authenticated via an API key can "create", "read",
"update", and "delete" any "Todo" records.
=========================================================================*/
const schema = a.schema({
  Todo: a
    .model({
      content: a.string(),
      isDone: a.boolean(),
      createdAt: a.datetime(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
  Account: a
    .model({
      wallet: a.string(),
      ens: a.string(),
      balance: a.float(),
      nftAddresses: a.json(),
      medias: a.json(),
      verified: a.boolean(),
      createdAt: a.datetime(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
  NFT: a
    .model({
      ownersWallet: a.string(),
      blockAddress: a.string(),
      cid: a.string(),
      sizeGb: a.float(),
      metadata: a.json(),
      price: a.float(),
      createdAt: a.datetime(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
  AIModel: a
    .model({
      name: a.string(),
      ownersWallet: a.string(),
      description: a.string(),
      accuracy: a.float(),
      app: a.string(),
      price: a.float(),
      status: a.string(),
      serialisedConfig: a.json(),
      published: a.boolean(),
      createdAt: a.datetime(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
  Media: a
    .model({
      walletAddress: a.string(),
      taskId: a.string(),
      dataURL: a.string(),
      ocr: a.string(),
      format: a.string(),
      sizeGb: a.float(),
      status: a.string(),
      createdAt: a.datetime(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
  Task: a
    .model({
      mediaId: a.string(),
      aiModelId: a.string(),
      walletAddress: a.string(),
      medias: a.json(),
      name: a.string(),
      description: a.string(),
      difficulty: a.float(),
      app: a.string(),
      appImage: a.string(),
      priceListed: a.float(),
      status: a.string(),
      published: a.boolean(),
      createdAt: a.datetime(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
  Sale: a
    .model({
      taskId: a.string(),
      aiModelId: a.string(),
      priceListed: a.float(), // Listing price
      pricePaid: a.float(), // Price paid in case of Auctions - biddings - isAuction=true
      isAuction: a.boolean(),
      app: a.string(),
      sellerssWallet: a.string(),
      buyersWallet: a.string(),
      transactionLedgerId: a.string(),
      status: a.string(),
      published: a.boolean(),
      createdAt: a.datetime(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
  App: a
    .model({
      name: a.string(),
      description: a.string(),
      rank: a.float(),
      tasks: a.json(),
      status: a.string(),
      published: a.boolean(),
      createdAt: a.datetime(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    // API Key is used for a.allow.public() rules
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
