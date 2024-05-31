/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type AIModel = {
  __typename: "AIModel",
  accuracy?: number | null,
  app?: string | null,
  createdAt?: string | null,
  description?: string | null,
  id: string,
  name?: string | null,
  ownersWallet?: string | null,
  price?: number | null,
  published?: boolean | null,
  serialisedConfig?: string | null,
  status?: string | null,
  updatedAt: string,
};

export type Account = {
  __typename: "Account",
  balance?: number | null,
  createdAt?: string | null,
  id: string,
  medias?: string | null,
  nftAddresses?: string | null,
  updatedAt: string,
  verified?: boolean | null,
  walletAddress?: string | null,
};

export type App = {
  __typename: "App",
  createdAt?: string | null,
  description?: string | null,
  id: string,
  name?: string | null,
  published?: boolean | null,
  rank?: number | null,
  status?: string | null,
  tasks?: string | null,
  updatedAt: string,
};

export type Media = {
  __typename: "Media",
  createdAt?: string | null,
  dataURL?: string | null,
  id: string,
  ocr?: string | null,
  price?: number | null,
  taskId?: string | null,
  updatedAt: string,
  walletAddress?: string | null,
};

export type NFT = {
  __typename: "NFT",
  blockAddress?: string | null,
  cid?: string | null,
  createdAt?: string | null,
  id: string,
  metadata?: string | null,
  ownersWallet?: string | null,
  price?: number | null,
  sizeGb?: number | null,
  updatedAt: string,
};

export type Sale = {
  __typename: "Sale",
  aiModelId?: string | null,
  app?: string | null,
  buyersWallet?: string | null,
  createdAt?: string | null,
  id: string,
  isAuction?: boolean | null,
  priceListed?: number | null,
  pricePaid?: number | null,
  published?: boolean | null,
  sellerssWallet?: string | null,
  status?: string | null,
  taskId?: string | null,
  transactionLedgerId?: string | null,
  updatedAt: string,
};

export type Task = {
  __typename: "Task",
  app?: string | null,
  appImage?: string | null,
  createdAt?: string | null,
  description?: string | null,
  difficulty?: number | null,
  id: string,
  mediaId?: string | null,
  medias?: string | null,
  name?: string | null,
  updatedAt: string,
  walletAddress?: string | null,
};

export type Todo = {
  __typename: "Todo",
  content?: string | null,
  createdAt?: string | null,
  id: string,
  isDone?: boolean | null,
  updatedAt: string,
};

export type ModelAIModelFilterInput = {
  accuracy?: ModelFloatInput | null,
  and?: Array< ModelAIModelFilterInput | null > | null,
  app?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelAIModelFilterInput | null,
  or?: Array< ModelAIModelFilterInput | null > | null,
  ownersWallet?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  published?: ModelBooleanInput | null,
  serialisedConfig?: ModelStringInput | null,
  status?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelFloatInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelBooleanInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  eq?: boolean | null,
  ne?: boolean | null,
};

export type ModelAIModelConnection = {
  __typename: "ModelAIModelConnection",
  items:  Array<AIModel | null >,
  nextToken?: string | null,
};

export type ModelAccountFilterInput = {
  and?: Array< ModelAccountFilterInput | null > | null,
  balance?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  medias?: ModelStringInput | null,
  nftAddresses?: ModelStringInput | null,
  not?: ModelAccountFilterInput | null,
  or?: Array< ModelAccountFilterInput | null > | null,
  updatedAt?: ModelStringInput | null,
  verified?: ModelBooleanInput | null,
  walletAddress?: ModelStringInput | null,
};

export type ModelAccountConnection = {
  __typename: "ModelAccountConnection",
  items:  Array<Account | null >,
  nextToken?: string | null,
};

export type ModelAppFilterInput = {
  and?: Array< ModelAppFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelAppFilterInput | null,
  or?: Array< ModelAppFilterInput | null > | null,
  published?: ModelBooleanInput | null,
  rank?: ModelFloatInput | null,
  status?: ModelStringInput | null,
  tasks?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelAppConnection = {
  __typename: "ModelAppConnection",
  items:  Array<App | null >,
  nextToken?: string | null,
};

export type ModelMediaFilterInput = {
  and?: Array< ModelMediaFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  dataURL?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelMediaFilterInput | null,
  ocr?: ModelStringInput | null,
  or?: Array< ModelMediaFilterInput | null > | null,
  price?: ModelFloatInput | null,
  taskId?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  walletAddress?: ModelStringInput | null,
};

export type ModelMediaConnection = {
  __typename: "ModelMediaConnection",
  items:  Array<Media | null >,
  nextToken?: string | null,
};

export type ModelNFTFilterInput = {
  and?: Array< ModelNFTFilterInput | null > | null,
  blockAddress?: ModelStringInput | null,
  cid?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  metadata?: ModelStringInput | null,
  not?: ModelNFTFilterInput | null,
  or?: Array< ModelNFTFilterInput | null > | null,
  ownersWallet?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  sizeGb?: ModelFloatInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelNFTConnection = {
  __typename: "ModelNFTConnection",
  items:  Array<NFT | null >,
  nextToken?: string | null,
};

export type ModelSaleFilterInput = {
  aiModelId?: ModelStringInput | null,
  and?: Array< ModelSaleFilterInput | null > | null,
  app?: ModelStringInput | null,
  buyersWallet?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  isAuction?: ModelBooleanInput | null,
  not?: ModelSaleFilterInput | null,
  or?: Array< ModelSaleFilterInput | null > | null,
  priceListed?: ModelFloatInput | null,
  pricePaid?: ModelFloatInput | null,
  published?: ModelBooleanInput | null,
  sellerssWallet?: ModelStringInput | null,
  status?: ModelStringInput | null,
  taskId?: ModelStringInput | null,
  transactionLedgerId?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelSaleConnection = {
  __typename: "ModelSaleConnection",
  items:  Array<Sale | null >,
  nextToken?: string | null,
};

export type ModelTaskFilterInput = {
  and?: Array< ModelTaskFilterInput | null > | null,
  app?: ModelStringInput | null,
  appImage?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  difficulty?: ModelFloatInput | null,
  id?: ModelIDInput | null,
  mediaId?: ModelStringInput | null,
  medias?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelTaskFilterInput | null,
  or?: Array< ModelTaskFilterInput | null > | null,
  updatedAt?: ModelStringInput | null,
  walletAddress?: ModelStringInput | null,
};

export type ModelTaskConnection = {
  __typename: "ModelTaskConnection",
  items:  Array<Task | null >,
  nextToken?: string | null,
};

export type ModelTodoFilterInput = {
  and?: Array< ModelTodoFilterInput | null > | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  isDone?: ModelBooleanInput | null,
  not?: ModelTodoFilterInput | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
};

export type ModelAIModelConditionInput = {
  accuracy?: ModelFloatInput | null,
  and?: Array< ModelAIModelConditionInput | null > | null,
  app?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelAIModelConditionInput | null,
  or?: Array< ModelAIModelConditionInput | null > | null,
  ownersWallet?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  published?: ModelBooleanInput | null,
  serialisedConfig?: ModelStringInput | null,
  status?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateAIModelInput = {
  accuracy?: number | null,
  app?: string | null,
  createdAt?: string | null,
  description?: string | null,
  id?: string | null,
  name?: string | null,
  ownersWallet?: string | null,
  price?: number | null,
  published?: boolean | null,
  serialisedConfig?: string | null,
  status?: string | null,
};

export type ModelAccountConditionInput = {
  and?: Array< ModelAccountConditionInput | null > | null,
  balance?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  medias?: ModelStringInput | null,
  nftAddresses?: ModelStringInput | null,
  not?: ModelAccountConditionInput | null,
  or?: Array< ModelAccountConditionInput | null > | null,
  updatedAt?: ModelStringInput | null,
  verified?: ModelBooleanInput | null,
  walletAddress?: ModelStringInput | null,
};

export type CreateAccountInput = {
  balance?: number | null,
  createdAt?: string | null,
  id?: string | null,
  medias?: string | null,
  nftAddresses?: string | null,
  verified?: boolean | null,
  walletAddress?: string | null,
};

export type ModelAppConditionInput = {
  and?: Array< ModelAppConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelAppConditionInput | null,
  or?: Array< ModelAppConditionInput | null > | null,
  published?: ModelBooleanInput | null,
  rank?: ModelFloatInput | null,
  status?: ModelStringInput | null,
  tasks?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateAppInput = {
  createdAt?: string | null,
  description?: string | null,
  id?: string | null,
  name?: string | null,
  published?: boolean | null,
  rank?: number | null,
  status?: string | null,
  tasks?: string | null,
};

export type ModelMediaConditionInput = {
  and?: Array< ModelMediaConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  dataURL?: ModelStringInput | null,
  not?: ModelMediaConditionInput | null,
  ocr?: ModelStringInput | null,
  or?: Array< ModelMediaConditionInput | null > | null,
  price?: ModelFloatInput | null,
  taskId?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  walletAddress?: ModelStringInput | null,
};

export type CreateMediaInput = {
  createdAt?: string | null,
  dataURL?: string | null,
  id?: string | null,
  ocr?: string | null,
  price?: number | null,
  taskId?: string | null,
  walletAddress?: string | null,
};

export type ModelNFTConditionInput = {
  and?: Array< ModelNFTConditionInput | null > | null,
  blockAddress?: ModelStringInput | null,
  cid?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  metadata?: ModelStringInput | null,
  not?: ModelNFTConditionInput | null,
  or?: Array< ModelNFTConditionInput | null > | null,
  ownersWallet?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  sizeGb?: ModelFloatInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateNFTInput = {
  blockAddress?: string | null,
  cid?: string | null,
  createdAt?: string | null,
  id?: string | null,
  metadata?: string | null,
  ownersWallet?: string | null,
  price?: number | null,
  sizeGb?: number | null,
};

export type ModelSaleConditionInput = {
  aiModelId?: ModelStringInput | null,
  and?: Array< ModelSaleConditionInput | null > | null,
  app?: ModelStringInput | null,
  buyersWallet?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  isAuction?: ModelBooleanInput | null,
  not?: ModelSaleConditionInput | null,
  or?: Array< ModelSaleConditionInput | null > | null,
  priceListed?: ModelFloatInput | null,
  pricePaid?: ModelFloatInput | null,
  published?: ModelBooleanInput | null,
  sellerssWallet?: ModelStringInput | null,
  status?: ModelStringInput | null,
  taskId?: ModelStringInput | null,
  transactionLedgerId?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateSaleInput = {
  aiModelId?: string | null,
  app?: string | null,
  buyersWallet?: string | null,
  createdAt?: string | null,
  id?: string | null,
  isAuction?: boolean | null,
  priceListed?: number | null,
  pricePaid?: number | null,
  published?: boolean | null,
  sellerssWallet?: string | null,
  status?: string | null,
  taskId?: string | null,
  transactionLedgerId?: string | null,
};

export type ModelTaskConditionInput = {
  and?: Array< ModelTaskConditionInput | null > | null,
  app?: ModelStringInput | null,
  appImage?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  difficulty?: ModelFloatInput | null,
  mediaId?: ModelStringInput | null,
  medias?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelTaskConditionInput | null,
  or?: Array< ModelTaskConditionInput | null > | null,
  updatedAt?: ModelStringInput | null,
  walletAddress?: ModelStringInput | null,
};

export type CreateTaskInput = {
  app?: string | null,
  appImage?: string | null,
  createdAt?: string | null,
  description?: string | null,
  difficulty?: number | null,
  id?: string | null,
  mediaId?: string | null,
  medias?: string | null,
  name?: string | null,
  walletAddress?: string | null,
};

export type ModelTodoConditionInput = {
  and?: Array< ModelTodoConditionInput | null > | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  isDone?: ModelBooleanInput | null,
  not?: ModelTodoConditionInput | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateTodoInput = {
  content?: string | null,
  createdAt?: string | null,
  id?: string | null,
  isDone?: boolean | null,
};

export type DeleteAIModelInput = {
  id: string,
};

export type DeleteAccountInput = {
  id: string,
};

export type DeleteAppInput = {
  id: string,
};

export type DeleteMediaInput = {
  id: string,
};

export type DeleteNFTInput = {
  id: string,
};

export type DeleteSaleInput = {
  id: string,
};

export type DeleteTaskInput = {
  id: string,
};

export type DeleteTodoInput = {
  id: string,
};

export type UpdateAIModelInput = {
  accuracy?: number | null,
  app?: string | null,
  createdAt?: string | null,
  description?: string | null,
  id: string,
  name?: string | null,
  ownersWallet?: string | null,
  price?: number | null,
  published?: boolean | null,
  serialisedConfig?: string | null,
  status?: string | null,
};

export type UpdateAccountInput = {
  balance?: number | null,
  createdAt?: string | null,
  id: string,
  medias?: string | null,
  nftAddresses?: string | null,
  verified?: boolean | null,
  walletAddress?: string | null,
};

export type UpdateAppInput = {
  createdAt?: string | null,
  description?: string | null,
  id: string,
  name?: string | null,
  published?: boolean | null,
  rank?: number | null,
  status?: string | null,
  tasks?: string | null,
};

export type UpdateMediaInput = {
  createdAt?: string | null,
  dataURL?: string | null,
  id: string,
  ocr?: string | null,
  price?: number | null,
  taskId?: string | null,
  walletAddress?: string | null,
};

export type UpdateNFTInput = {
  blockAddress?: string | null,
  cid?: string | null,
  createdAt?: string | null,
  id: string,
  metadata?: string | null,
  ownersWallet?: string | null,
  price?: number | null,
  sizeGb?: number | null,
};

export type UpdateSaleInput = {
  aiModelId?: string | null,
  app?: string | null,
  buyersWallet?: string | null,
  createdAt?: string | null,
  id: string,
  isAuction?: boolean | null,
  priceListed?: number | null,
  pricePaid?: number | null,
  published?: boolean | null,
  sellerssWallet?: string | null,
  status?: string | null,
  taskId?: string | null,
  transactionLedgerId?: string | null,
};

export type UpdateTaskInput = {
  app?: string | null,
  appImage?: string | null,
  createdAt?: string | null,
  description?: string | null,
  difficulty?: number | null,
  id: string,
  mediaId?: string | null,
  medias?: string | null,
  name?: string | null,
  walletAddress?: string | null,
};

export type UpdateTodoInput = {
  content?: string | null,
  createdAt?: string | null,
  id: string,
  isDone?: boolean | null,
};

export type ModelSubscriptionAIModelFilterInput = {
  accuracy?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionAIModelFilterInput | null > | null,
  app?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionAIModelFilterInput | null > | null,
  ownersWallet?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  published?: ModelSubscriptionBooleanInput | null,
  serialisedConfig?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionFloatInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  in?: Array< number | null > | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  eq?: boolean | null,
  ne?: boolean | null,
};

export type ModelSubscriptionAccountFilterInput = {
  and?: Array< ModelSubscriptionAccountFilterInput | null > | null,
  balance?: ModelSubscriptionFloatInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  medias?: ModelSubscriptionStringInput | null,
  nftAddresses?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionAccountFilterInput | null > | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  verified?: ModelSubscriptionBooleanInput | null,
  walletAddress?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionAppFilterInput = {
  and?: Array< ModelSubscriptionAppFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionAppFilterInput | null > | null,
  published?: ModelSubscriptionBooleanInput | null,
  rank?: ModelSubscriptionFloatInput | null,
  status?: ModelSubscriptionStringInput | null,
  tasks?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionMediaFilterInput = {
  and?: Array< ModelSubscriptionMediaFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  dataURL?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  ocr?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionMediaFilterInput | null > | null,
  price?: ModelSubscriptionFloatInput | null,
  taskId?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  walletAddress?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionNFTFilterInput = {
  and?: Array< ModelSubscriptionNFTFilterInput | null > | null,
  blockAddress?: ModelSubscriptionStringInput | null,
  cid?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  metadata?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionNFTFilterInput | null > | null,
  ownersWallet?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  sizeGb?: ModelSubscriptionFloatInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionSaleFilterInput = {
  aiModelId?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSaleFilterInput | null > | null,
  app?: ModelSubscriptionStringInput | null,
  buyersWallet?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  isAuction?: ModelSubscriptionBooleanInput | null,
  or?: Array< ModelSubscriptionSaleFilterInput | null > | null,
  priceListed?: ModelSubscriptionFloatInput | null,
  pricePaid?: ModelSubscriptionFloatInput | null,
  published?: ModelSubscriptionBooleanInput | null,
  sellerssWallet?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  taskId?: ModelSubscriptionStringInput | null,
  transactionLedgerId?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionTaskFilterInput = {
  and?: Array< ModelSubscriptionTaskFilterInput | null > | null,
  app?: ModelSubscriptionStringInput | null,
  appImage?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  difficulty?: ModelSubscriptionFloatInput | null,
  id?: ModelSubscriptionIDInput | null,
  mediaId?: ModelSubscriptionStringInput | null,
  medias?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionTaskFilterInput | null > | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  walletAddress?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionTodoFilterInput = {
  and?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  content?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  isDone?: ModelSubscriptionBooleanInput | null,
  or?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type GetAIModelQueryVariables = {
  id: string,
};

export type GetAIModelQuery = {
  getAIModel?:  {
    __typename: "AIModel",
    accuracy?: number | null,
    app?: string | null,
    createdAt?: string | null,
    description?: string | null,
    id: string,
    name?: string | null,
    ownersWallet?: string | null,
    price?: number | null,
    published?: boolean | null,
    serialisedConfig?: string | null,
    status?: string | null,
    updatedAt: string,
  } | null,
};

export type GetAccountQueryVariables = {
  id: string,
};

export type GetAccountQuery = {
  getAccount?:  {
    __typename: "Account",
    balance?: number | null,
    createdAt?: string | null,
    id: string,
    medias?: string | null,
    nftAddresses?: string | null,
    updatedAt: string,
    verified?: boolean | null,
    walletAddress?: string | null,
  } | null,
};

export type GetAppQueryVariables = {
  id: string,
};

export type GetAppQuery = {
  getApp?:  {
    __typename: "App",
    createdAt?: string | null,
    description?: string | null,
    id: string,
    name?: string | null,
    published?: boolean | null,
    rank?: number | null,
    status?: string | null,
    tasks?: string | null,
    updatedAt: string,
  } | null,
};

export type GetMediaQueryVariables = {
  id: string,
};

export type GetMediaQuery = {
  getMedia?:  {
    __typename: "Media",
    createdAt?: string | null,
    dataURL?: string | null,
    id: string,
    ocr?: string | null,
    price?: number | null,
    taskId?: string | null,
    updatedAt: string,
    walletAddress?: string | null,
  } | null,
};

export type GetNFTQueryVariables = {
  id: string,
};

export type GetNFTQuery = {
  getNFT?:  {
    __typename: "NFT",
    blockAddress?: string | null,
    cid?: string | null,
    createdAt?: string | null,
    id: string,
    metadata?: string | null,
    ownersWallet?: string | null,
    price?: number | null,
    sizeGb?: number | null,
    updatedAt: string,
  } | null,
};

export type GetSaleQueryVariables = {
  id: string,
};

export type GetSaleQuery = {
  getSale?:  {
    __typename: "Sale",
    aiModelId?: string | null,
    app?: string | null,
    buyersWallet?: string | null,
    createdAt?: string | null,
    id: string,
    isAuction?: boolean | null,
    priceListed?: number | null,
    pricePaid?: number | null,
    published?: boolean | null,
    sellerssWallet?: string | null,
    status?: string | null,
    taskId?: string | null,
    transactionLedgerId?: string | null,
    updatedAt: string,
  } | null,
};

export type GetTaskQueryVariables = {
  id: string,
};

export type GetTaskQuery = {
  getTask?:  {
    __typename: "Task",
    app?: string | null,
    appImage?: string | null,
    createdAt?: string | null,
    description?: string | null,
    difficulty?: number | null,
    id: string,
    mediaId?: string | null,
    medias?: string | null,
    name?: string | null,
    updatedAt: string,
    walletAddress?: string | null,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt?: string | null,
    id: string,
    isDone?: boolean | null,
    updatedAt: string,
  } | null,
};

export type ListAIModelsQueryVariables = {
  filter?: ModelAIModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAIModelsQuery = {
  listAIModels?:  {
    __typename: "ModelAIModelConnection",
    items:  Array< {
      __typename: "AIModel",
      accuracy?: number | null,
      app?: string | null,
      createdAt?: string | null,
      description?: string | null,
      id: string,
      name?: string | null,
      ownersWallet?: string | null,
      price?: number | null,
      published?: boolean | null,
      serialisedConfig?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListAccountsQueryVariables = {
  filter?: ModelAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAccountsQuery = {
  listAccounts?:  {
    __typename: "ModelAccountConnection",
    items:  Array< {
      __typename: "Account",
      balance?: number | null,
      createdAt?: string | null,
      id: string,
      medias?: string | null,
      nftAddresses?: string | null,
      updatedAt: string,
      verified?: boolean | null,
      walletAddress?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListAppsQueryVariables = {
  filter?: ModelAppFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAppsQuery = {
  listApps?:  {
    __typename: "ModelAppConnection",
    items:  Array< {
      __typename: "App",
      createdAt?: string | null,
      description?: string | null,
      id: string,
      name?: string | null,
      published?: boolean | null,
      rank?: number | null,
      status?: string | null,
      tasks?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListMediaQueryVariables = {
  filter?: ModelMediaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMediaQuery = {
  listMedia?:  {
    __typename: "ModelMediaConnection",
    items:  Array< {
      __typename: "Media",
      createdAt?: string | null,
      dataURL?: string | null,
      id: string,
      ocr?: string | null,
      price?: number | null,
      taskId?: string | null,
      updatedAt: string,
      walletAddress?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListNFTSQueryVariables = {
  filter?: ModelNFTFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNFTSQuery = {
  listNFTS?:  {
    __typename: "ModelNFTConnection",
    items:  Array< {
      __typename: "NFT",
      blockAddress?: string | null,
      cid?: string | null,
      createdAt?: string | null,
      id: string,
      metadata?: string | null,
      ownersWallet?: string | null,
      price?: number | null,
      sizeGb?: number | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListSalesQueryVariables = {
  filter?: ModelSaleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSalesQuery = {
  listSales?:  {
    __typename: "ModelSaleConnection",
    items:  Array< {
      __typename: "Sale",
      aiModelId?: string | null,
      app?: string | null,
      buyersWallet?: string | null,
      createdAt?: string | null,
      id: string,
      isAuction?: boolean | null,
      priceListed?: number | null,
      pricePaid?: number | null,
      published?: boolean | null,
      sellerssWallet?: string | null,
      status?: string | null,
      taskId?: string | null,
      transactionLedgerId?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListTasksQueryVariables = {
  filter?: ModelTaskFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTasksQuery = {
  listTasks?:  {
    __typename: "ModelTaskConnection",
    items:  Array< {
      __typename: "Task",
      app?: string | null,
      appImage?: string | null,
      createdAt?: string | null,
      description?: string | null,
      difficulty?: number | null,
      id: string,
      mediaId?: string | null,
      medias?: string | null,
      name?: string | null,
      updatedAt: string,
      walletAddress?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      content?: string | null,
      createdAt?: string | null,
      id: string,
      isDone?: boolean | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateAIModelMutationVariables = {
  condition?: ModelAIModelConditionInput | null,
  input: CreateAIModelInput,
};

export type CreateAIModelMutation = {
  createAIModel?:  {
    __typename: "AIModel",
    accuracy?: number | null,
    app?: string | null,
    createdAt?: string | null,
    description?: string | null,
    id: string,
    name?: string | null,
    ownersWallet?: string | null,
    price?: number | null,
    published?: boolean | null,
    serialisedConfig?: string | null,
    status?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateAccountMutationVariables = {
  condition?: ModelAccountConditionInput | null,
  input: CreateAccountInput,
};

export type CreateAccountMutation = {
  createAccount?:  {
    __typename: "Account",
    balance?: number | null,
    createdAt?: string | null,
    id: string,
    medias?: string | null,
    nftAddresses?: string | null,
    updatedAt: string,
    verified?: boolean | null,
    walletAddress?: string | null,
  } | null,
};

export type CreateAppMutationVariables = {
  condition?: ModelAppConditionInput | null,
  input: CreateAppInput,
};

export type CreateAppMutation = {
  createApp?:  {
    __typename: "App",
    createdAt?: string | null,
    description?: string | null,
    id: string,
    name?: string | null,
    published?: boolean | null,
    rank?: number | null,
    status?: string | null,
    tasks?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateMediaMutationVariables = {
  condition?: ModelMediaConditionInput | null,
  input: CreateMediaInput,
};

export type CreateMediaMutation = {
  createMedia?:  {
    __typename: "Media",
    createdAt?: string | null,
    dataURL?: string | null,
    id: string,
    ocr?: string | null,
    price?: number | null,
    taskId?: string | null,
    updatedAt: string,
    walletAddress?: string | null,
  } | null,
};

export type CreateMediasMutationVariables = {
  frames?: string | null,
  taskId?: string | null,
  walletAddress?: string | null,
};

export type CreateMediasMutation = {
  createMedias?:  {
    __typename: "Task",
    app?: string | null,
    appImage?: string | null,
    createdAt?: string | null,
    description?: string | null,
    difficulty?: number | null,
    id: string,
    mediaId?: string | null,
    medias?: string | null,
    name?: string | null,
    updatedAt: string,
    walletAddress?: string | null,
  } | null,
};

export type CreateNFTMutationVariables = {
  condition?: ModelNFTConditionInput | null,
  input: CreateNFTInput,
};

export type CreateNFTMutation = {
  createNFT?:  {
    __typename: "NFT",
    blockAddress?: string | null,
    cid?: string | null,
    createdAt?: string | null,
    id: string,
    metadata?: string | null,
    ownersWallet?: string | null,
    price?: number | null,
    sizeGb?: number | null,
    updatedAt: string,
  } | null,
};

export type CreateSaleMutationVariables = {
  condition?: ModelSaleConditionInput | null,
  input: CreateSaleInput,
};

export type CreateSaleMutation = {
  createSale?:  {
    __typename: "Sale",
    aiModelId?: string | null,
    app?: string | null,
    buyersWallet?: string | null,
    createdAt?: string | null,
    id: string,
    isAuction?: boolean | null,
    priceListed?: number | null,
    pricePaid?: number | null,
    published?: boolean | null,
    sellerssWallet?: string | null,
    status?: string | null,
    taskId?: string | null,
    transactionLedgerId?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateTaskMutationVariables = {
  condition?: ModelTaskConditionInput | null,
  input: CreateTaskInput,
};

export type CreateTaskMutation = {
  createTask?:  {
    __typename: "Task",
    app?: string | null,
    appImage?: string | null,
    createdAt?: string | null,
    description?: string | null,
    difficulty?: number | null,
    id: string,
    mediaId?: string | null,
    medias?: string | null,
    name?: string | null,
    updatedAt: string,
    walletAddress?: string | null,
  } | null,
};

export type CreateTodoMutationVariables = {
  condition?: ModelTodoConditionInput | null,
  input: CreateTodoInput,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt?: string | null,
    id: string,
    isDone?: boolean | null,
    updatedAt: string,
  } | null,
};

export type DeleteAIModelMutationVariables = {
  condition?: ModelAIModelConditionInput | null,
  input: DeleteAIModelInput,
};

export type DeleteAIModelMutation = {
  deleteAIModel?:  {
    __typename: "AIModel",
    accuracy?: number | null,
    app?: string | null,
    createdAt?: string | null,
    description?: string | null,
    id: string,
    name?: string | null,
    ownersWallet?: string | null,
    price?: number | null,
    published?: boolean | null,
    serialisedConfig?: string | null,
    status?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteAccountMutationVariables = {
  condition?: ModelAccountConditionInput | null,
  input: DeleteAccountInput,
};

export type DeleteAccountMutation = {
  deleteAccount?:  {
    __typename: "Account",
    balance?: number | null,
    createdAt?: string | null,
    id: string,
    medias?: string | null,
    nftAddresses?: string | null,
    updatedAt: string,
    verified?: boolean | null,
    walletAddress?: string | null,
  } | null,
};

export type DeleteAppMutationVariables = {
  condition?: ModelAppConditionInput | null,
  input: DeleteAppInput,
};

export type DeleteAppMutation = {
  deleteApp?:  {
    __typename: "App",
    createdAt?: string | null,
    description?: string | null,
    id: string,
    name?: string | null,
    published?: boolean | null,
    rank?: number | null,
    status?: string | null,
    tasks?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteMediaMutationVariables = {
  condition?: ModelMediaConditionInput | null,
  input: DeleteMediaInput,
};

export type DeleteMediaMutation = {
  deleteMedia?:  {
    __typename: "Media",
    createdAt?: string | null,
    dataURL?: string | null,
    id: string,
    ocr?: string | null,
    price?: number | null,
    taskId?: string | null,
    updatedAt: string,
    walletAddress?: string | null,
  } | null,
};

export type DeleteNFTMutationVariables = {
  condition?: ModelNFTConditionInput | null,
  input: DeleteNFTInput,
};

export type DeleteNFTMutation = {
  deleteNFT?:  {
    __typename: "NFT",
    blockAddress?: string | null,
    cid?: string | null,
    createdAt?: string | null,
    id: string,
    metadata?: string | null,
    ownersWallet?: string | null,
    price?: number | null,
    sizeGb?: number | null,
    updatedAt: string,
  } | null,
};

export type DeleteSaleMutationVariables = {
  condition?: ModelSaleConditionInput | null,
  input: DeleteSaleInput,
};

export type DeleteSaleMutation = {
  deleteSale?:  {
    __typename: "Sale",
    aiModelId?: string | null,
    app?: string | null,
    buyersWallet?: string | null,
    createdAt?: string | null,
    id: string,
    isAuction?: boolean | null,
    priceListed?: number | null,
    pricePaid?: number | null,
    published?: boolean | null,
    sellerssWallet?: string | null,
    status?: string | null,
    taskId?: string | null,
    transactionLedgerId?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteTaskMutationVariables = {
  condition?: ModelTaskConditionInput | null,
  input: DeleteTaskInput,
};

export type DeleteTaskMutation = {
  deleteTask?:  {
    __typename: "Task",
    app?: string | null,
    appImage?: string | null,
    createdAt?: string | null,
    description?: string | null,
    difficulty?: number | null,
    id: string,
    mediaId?: string | null,
    medias?: string | null,
    name?: string | null,
    updatedAt: string,
    walletAddress?: string | null,
  } | null,
};

export type DeleteTodoMutationVariables = {
  condition?: ModelTodoConditionInput | null,
  input: DeleteTodoInput,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt?: string | null,
    id: string,
    isDone?: boolean | null,
    updatedAt: string,
  } | null,
};

export type UpdateAIModelMutationVariables = {
  condition?: ModelAIModelConditionInput | null,
  input: UpdateAIModelInput,
};

export type UpdateAIModelMutation = {
  updateAIModel?:  {
    __typename: "AIModel",
    accuracy?: number | null,
    app?: string | null,
    createdAt?: string | null,
    description?: string | null,
    id: string,
    name?: string | null,
    ownersWallet?: string | null,
    price?: number | null,
    published?: boolean | null,
    serialisedConfig?: string | null,
    status?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateAccountMutationVariables = {
  condition?: ModelAccountConditionInput | null,
  input: UpdateAccountInput,
};

export type UpdateAccountMutation = {
  updateAccount?:  {
    __typename: "Account",
    balance?: number | null,
    createdAt?: string | null,
    id: string,
    medias?: string | null,
    nftAddresses?: string | null,
    updatedAt: string,
    verified?: boolean | null,
    walletAddress?: string | null,
  } | null,
};

export type UpdateAppMutationVariables = {
  condition?: ModelAppConditionInput | null,
  input: UpdateAppInput,
};

export type UpdateAppMutation = {
  updateApp?:  {
    __typename: "App",
    createdAt?: string | null,
    description?: string | null,
    id: string,
    name?: string | null,
    published?: boolean | null,
    rank?: number | null,
    status?: string | null,
    tasks?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateMediaMutationVariables = {
  condition?: ModelMediaConditionInput | null,
  input: UpdateMediaInput,
};

export type UpdateMediaMutation = {
  updateMedia?:  {
    __typename: "Media",
    createdAt?: string | null,
    dataURL?: string | null,
    id: string,
    ocr?: string | null,
    price?: number | null,
    taskId?: string | null,
    updatedAt: string,
    walletAddress?: string | null,
  } | null,
};

export type UpdateNFTMutationVariables = {
  condition?: ModelNFTConditionInput | null,
  input: UpdateNFTInput,
};

export type UpdateNFTMutation = {
  updateNFT?:  {
    __typename: "NFT",
    blockAddress?: string | null,
    cid?: string | null,
    createdAt?: string | null,
    id: string,
    metadata?: string | null,
    ownersWallet?: string | null,
    price?: number | null,
    sizeGb?: number | null,
    updatedAt: string,
  } | null,
};

export type UpdateSaleMutationVariables = {
  condition?: ModelSaleConditionInput | null,
  input: UpdateSaleInput,
};

export type UpdateSaleMutation = {
  updateSale?:  {
    __typename: "Sale",
    aiModelId?: string | null,
    app?: string | null,
    buyersWallet?: string | null,
    createdAt?: string | null,
    id: string,
    isAuction?: boolean | null,
    priceListed?: number | null,
    pricePaid?: number | null,
    published?: boolean | null,
    sellerssWallet?: string | null,
    status?: string | null,
    taskId?: string | null,
    transactionLedgerId?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateTaskMutationVariables = {
  condition?: ModelTaskConditionInput | null,
  input: UpdateTaskInput,
};

export type UpdateTaskMutation = {
  updateTask?:  {
    __typename: "Task",
    app?: string | null,
    appImage?: string | null,
    createdAt?: string | null,
    description?: string | null,
    difficulty?: number | null,
    id: string,
    mediaId?: string | null,
    medias?: string | null,
    name?: string | null,
    updatedAt: string,
    walletAddress?: string | null,
  } | null,
};

export type UpdateTodoMutationVariables = {
  condition?: ModelTodoConditionInput | null,
  input: UpdateTodoInput,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt?: string | null,
    id: string,
    isDone?: boolean | null,
    updatedAt: string,
  } | null,
};

export type OnCreateAIModelSubscriptionVariables = {
  filter?: ModelSubscriptionAIModelFilterInput | null,
};

export type OnCreateAIModelSubscription = {
  onCreateAIModel?:  {
    __typename: "AIModel",
    accuracy?: number | null,
    app?: string | null,
    createdAt?: string | null,
    description?: string | null,
    id: string,
    name?: string | null,
    ownersWallet?: string | null,
    price?: number | null,
    published?: boolean | null,
    serialisedConfig?: string | null,
    status?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateAccountSubscriptionVariables = {
  filter?: ModelSubscriptionAccountFilterInput | null,
};

export type OnCreateAccountSubscription = {
  onCreateAccount?:  {
    __typename: "Account",
    balance?: number | null,
    createdAt?: string | null,
    id: string,
    medias?: string | null,
    nftAddresses?: string | null,
    updatedAt: string,
    verified?: boolean | null,
    walletAddress?: string | null,
  } | null,
};

export type OnCreateAppSubscriptionVariables = {
  filter?: ModelSubscriptionAppFilterInput | null,
};

export type OnCreateAppSubscription = {
  onCreateApp?:  {
    __typename: "App",
    createdAt?: string | null,
    description?: string | null,
    id: string,
    name?: string | null,
    published?: boolean | null,
    rank?: number | null,
    status?: string | null,
    tasks?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateMediaSubscriptionVariables = {
  filter?: ModelSubscriptionMediaFilterInput | null,
};

export type OnCreateMediaSubscription = {
  onCreateMedia?:  {
    __typename: "Media",
    createdAt?: string | null,
    dataURL?: string | null,
    id: string,
    ocr?: string | null,
    price?: number | null,
    taskId?: string | null,
    updatedAt: string,
    walletAddress?: string | null,
  } | null,
};

export type OnCreateNFTSubscriptionVariables = {
  filter?: ModelSubscriptionNFTFilterInput | null,
};

export type OnCreateNFTSubscription = {
  onCreateNFT?:  {
    __typename: "NFT",
    blockAddress?: string | null,
    cid?: string | null,
    createdAt?: string | null,
    id: string,
    metadata?: string | null,
    ownersWallet?: string | null,
    price?: number | null,
    sizeGb?: number | null,
    updatedAt: string,
  } | null,
};

export type OnCreateSaleSubscriptionVariables = {
  filter?: ModelSubscriptionSaleFilterInput | null,
};

export type OnCreateSaleSubscription = {
  onCreateSale?:  {
    __typename: "Sale",
    aiModelId?: string | null,
    app?: string | null,
    buyersWallet?: string | null,
    createdAt?: string | null,
    id: string,
    isAuction?: boolean | null,
    priceListed?: number | null,
    pricePaid?: number | null,
    published?: boolean | null,
    sellerssWallet?: string | null,
    status?: string | null,
    taskId?: string | null,
    transactionLedgerId?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateTaskSubscriptionVariables = {
  filter?: ModelSubscriptionTaskFilterInput | null,
};

export type OnCreateTaskSubscription = {
  onCreateTask?:  {
    __typename: "Task",
    app?: string | null,
    appImage?: string | null,
    createdAt?: string | null,
    description?: string | null,
    difficulty?: number | null,
    id: string,
    mediaId?: string | null,
    medias?: string | null,
    name?: string | null,
    updatedAt: string,
    walletAddress?: string | null,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt?: string | null,
    id: string,
    isDone?: boolean | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteAIModelSubscriptionVariables = {
  filter?: ModelSubscriptionAIModelFilterInput | null,
};

export type OnDeleteAIModelSubscription = {
  onDeleteAIModel?:  {
    __typename: "AIModel",
    accuracy?: number | null,
    app?: string | null,
    createdAt?: string | null,
    description?: string | null,
    id: string,
    name?: string | null,
    ownersWallet?: string | null,
    price?: number | null,
    published?: boolean | null,
    serialisedConfig?: string | null,
    status?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteAccountSubscriptionVariables = {
  filter?: ModelSubscriptionAccountFilterInput | null,
};

export type OnDeleteAccountSubscription = {
  onDeleteAccount?:  {
    __typename: "Account",
    balance?: number | null,
    createdAt?: string | null,
    id: string,
    medias?: string | null,
    nftAddresses?: string | null,
    updatedAt: string,
    verified?: boolean | null,
    walletAddress?: string | null,
  } | null,
};

export type OnDeleteAppSubscriptionVariables = {
  filter?: ModelSubscriptionAppFilterInput | null,
};

export type OnDeleteAppSubscription = {
  onDeleteApp?:  {
    __typename: "App",
    createdAt?: string | null,
    description?: string | null,
    id: string,
    name?: string | null,
    published?: boolean | null,
    rank?: number | null,
    status?: string | null,
    tasks?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteMediaSubscriptionVariables = {
  filter?: ModelSubscriptionMediaFilterInput | null,
};

export type OnDeleteMediaSubscription = {
  onDeleteMedia?:  {
    __typename: "Media",
    createdAt?: string | null,
    dataURL?: string | null,
    id: string,
    ocr?: string | null,
    price?: number | null,
    taskId?: string | null,
    updatedAt: string,
    walletAddress?: string | null,
  } | null,
};

export type OnDeleteNFTSubscriptionVariables = {
  filter?: ModelSubscriptionNFTFilterInput | null,
};

export type OnDeleteNFTSubscription = {
  onDeleteNFT?:  {
    __typename: "NFT",
    blockAddress?: string | null,
    cid?: string | null,
    createdAt?: string | null,
    id: string,
    metadata?: string | null,
    ownersWallet?: string | null,
    price?: number | null,
    sizeGb?: number | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteSaleSubscriptionVariables = {
  filter?: ModelSubscriptionSaleFilterInput | null,
};

export type OnDeleteSaleSubscription = {
  onDeleteSale?:  {
    __typename: "Sale",
    aiModelId?: string | null,
    app?: string | null,
    buyersWallet?: string | null,
    createdAt?: string | null,
    id: string,
    isAuction?: boolean | null,
    priceListed?: number | null,
    pricePaid?: number | null,
    published?: boolean | null,
    sellerssWallet?: string | null,
    status?: string | null,
    taskId?: string | null,
    transactionLedgerId?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteTaskSubscriptionVariables = {
  filter?: ModelSubscriptionTaskFilterInput | null,
};

export type OnDeleteTaskSubscription = {
  onDeleteTask?:  {
    __typename: "Task",
    app?: string | null,
    appImage?: string | null,
    createdAt?: string | null,
    description?: string | null,
    difficulty?: number | null,
    id: string,
    mediaId?: string | null,
    medias?: string | null,
    name?: string | null,
    updatedAt: string,
    walletAddress?: string | null,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt?: string | null,
    id: string,
    isDone?: boolean | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateAIModelSubscriptionVariables = {
  filter?: ModelSubscriptionAIModelFilterInput | null,
};

export type OnUpdateAIModelSubscription = {
  onUpdateAIModel?:  {
    __typename: "AIModel",
    accuracy?: number | null,
    app?: string | null,
    createdAt?: string | null,
    description?: string | null,
    id: string,
    name?: string | null,
    ownersWallet?: string | null,
    price?: number | null,
    published?: boolean | null,
    serialisedConfig?: string | null,
    status?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateAccountSubscriptionVariables = {
  filter?: ModelSubscriptionAccountFilterInput | null,
};

export type OnUpdateAccountSubscription = {
  onUpdateAccount?:  {
    __typename: "Account",
    balance?: number | null,
    createdAt?: string | null,
    id: string,
    medias?: string | null,
    nftAddresses?: string | null,
    updatedAt: string,
    verified?: boolean | null,
    walletAddress?: string | null,
  } | null,
};

export type OnUpdateAppSubscriptionVariables = {
  filter?: ModelSubscriptionAppFilterInput | null,
};

export type OnUpdateAppSubscription = {
  onUpdateApp?:  {
    __typename: "App",
    createdAt?: string | null,
    description?: string | null,
    id: string,
    name?: string | null,
    published?: boolean | null,
    rank?: number | null,
    status?: string | null,
    tasks?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateMediaSubscriptionVariables = {
  filter?: ModelSubscriptionMediaFilterInput | null,
};

export type OnUpdateMediaSubscription = {
  onUpdateMedia?:  {
    __typename: "Media",
    createdAt?: string | null,
    dataURL?: string | null,
    id: string,
    ocr?: string | null,
    price?: number | null,
    taskId?: string | null,
    updatedAt: string,
    walletAddress?: string | null,
  } | null,
};

export type OnUpdateNFTSubscriptionVariables = {
  filter?: ModelSubscriptionNFTFilterInput | null,
};

export type OnUpdateNFTSubscription = {
  onUpdateNFT?:  {
    __typename: "NFT",
    blockAddress?: string | null,
    cid?: string | null,
    createdAt?: string | null,
    id: string,
    metadata?: string | null,
    ownersWallet?: string | null,
    price?: number | null,
    sizeGb?: number | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateSaleSubscriptionVariables = {
  filter?: ModelSubscriptionSaleFilterInput | null,
};

export type OnUpdateSaleSubscription = {
  onUpdateSale?:  {
    __typename: "Sale",
    aiModelId?: string | null,
    app?: string | null,
    buyersWallet?: string | null,
    createdAt?: string | null,
    id: string,
    isAuction?: boolean | null,
    priceListed?: number | null,
    pricePaid?: number | null,
    published?: boolean | null,
    sellerssWallet?: string | null,
    status?: string | null,
    taskId?: string | null,
    transactionLedgerId?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateTaskSubscriptionVariables = {
  filter?: ModelSubscriptionTaskFilterInput | null,
};

export type OnUpdateTaskSubscription = {
  onUpdateTask?:  {
    __typename: "Task",
    app?: string | null,
    appImage?: string | null,
    createdAt?: string | null,
    description?: string | null,
    difficulty?: number | null,
    id: string,
    mediaId?: string | null,
    medias?: string | null,
    name?: string | null,
    updatedAt: string,
    walletAddress?: string | null,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt?: string | null,
    id: string,
    isDone?: boolean | null,
    updatedAt: string,
  } | null,
};
