import {
  type ClientSchema,
  a,
  defineData,
  defineFunction,
} from '@aws-amplify/backend';

const mediasHandler = defineFunction({
  entry: './medias-handler/handler.ts',
});

const schema = a.schema({
  Todo: a
    .model({
      content: a.string(),
      isDone: a.boolean(),
      createdAt: a.datetime(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
  Media: a
    .model({
      walletAddress: a.string(),
      taskId: a.string(),
      s3address: a.string(),
      fileName: a.string(),
      sizeMb: a.float(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
  Task: a
    .model({
      mediaId: a.string(),
      walletAddress: a.string(),
      name: a.string(),
      description: a.json(),
      difficulty: a.float(),
      app: a.string(),
      appImage: a.string(),
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

  // Custom mutation to create multiple medias at once (received as 'frames')
  createMedias: a
    .mutation()
    .arguments({
      walletAddress: a.string(),
      taskId: a.string(),
      frames: a.json(), // medias
    })
    .returns(a.ref('Task'))
    .authorization((allow) => [allow.publicApiKey()])
    .handler(a.handler.function(mediasHandler)),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    // API Key is used for a.allow.public() rules
    apiKeyAuthorizationMode: {
      expiresInDays: 300,
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
