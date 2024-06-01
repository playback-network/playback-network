import { defineBackend } from '@aws-amplify/backend';
import { myApiFunction } from './functions/api-function/resource';
import { galadrielFunction } from './functions/galadriel-function/resource';
import { payloadmanagerFunction } from './functions/payloadmanager-function/resource';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { storage } from './storage/resource';

const backend = defineBackend({
  auth,
  data,
  myApiFunction,
  galadrielFunction,
  payloadmanagerFunction,
  storage,
});