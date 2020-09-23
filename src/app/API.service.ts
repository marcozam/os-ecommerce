/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateTokensInput = {
  id?: string | null;
  name: string;
};

export type ModelTokensConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelTokensConditionInput | null> | null;
  or?: Array<ModelTokensConditionInput | null> | null;
  not?: ModelTokensConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UpdateTokensInput = {
  id: string;
  name?: string | null;
};

export type DeleteTokensInput = {
  id?: string | null;
};

export type CreateFilesInput = {
  id?: string | null;
  name: string;
  description?: string | null;
};

export type ModelFilesConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelFilesConditionInput | null> | null;
  or?: Array<ModelFilesConditionInput | null> | null;
  not?: ModelFilesConditionInput | null;
};

export type UpdateFilesInput = {
  id: string;
  name?: string | null;
  description?: string | null;
};

export type DeleteFilesInput = {
  id?: string | null;
};

export type CreateDeviceInput = {
  id?: string | null;
  name: string;
};

export type ModelDeviceConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelDeviceConditionInput | null> | null;
  or?: Array<ModelDeviceConditionInput | null> | null;
  not?: ModelDeviceConditionInput | null;
};

export type UpdateDeviceInput = {
  id: string;
  name?: string | null;
};

export type DeleteDeviceInput = {
  id?: string | null;
};

export type ModelTokensFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelTokensFilterInput | null> | null;
  or?: Array<ModelTokensFilterInput | null> | null;
  not?: ModelTokensFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelFilesFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelFilesFilterInput | null> | null;
  or?: Array<ModelFilesFilterInput | null> | null;
  not?: ModelFilesFilterInput | null;
};

export type ModelDeviceFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelDeviceFilterInput | null> | null;
  or?: Array<ModelDeviceFilterInput | null> | null;
  not?: ModelDeviceFilterInput | null;
};

export type CreateTokensMutation = {
  __typename: "Tokens";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTokensMutation = {
  __typename: "Tokens";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteTokensMutation = {
  __typename: "Tokens";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateFilesMutation = {
  __typename: "Files";
  id: string;
  name: string;
  description: string | null;
  tokens: Array<{
    __typename: "Tokens";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  }> | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateFilesMutation = {
  __typename: "Files";
  id: string;
  name: string;
  description: string | null;
  tokens: Array<{
    __typename: "Tokens";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  }> | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteFilesMutation = {
  __typename: "Files";
  id: string;
  name: string;
  description: string | null;
  tokens: Array<{
    __typename: "Tokens";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  }> | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateDeviceMutation = {
  __typename: "Device";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateDeviceMutation = {
  __typename: "Device";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteDeviceMutation = {
  __typename: "Device";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type GetTokensQuery = {
  __typename: "Tokens";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type ListTokenssQuery = {
  __typename: "ModelTokensConnection";
  items: Array<{
    __typename: "Tokens";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetFilesQuery = {
  __typename: "Files";
  id: string;
  name: string;
  description: string | null;
  tokens: Array<{
    __typename: "Tokens";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  }> | null;
  createdAt: string;
  updatedAt: string;
};

export type ListFilessQuery = {
  __typename: "ModelFilesConnection";
  items: Array<{
    __typename: "Files";
    id: string;
    name: string;
    description: string | null;
    tokens: Array<{
      __typename: "Tokens";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetDeviceQuery = {
  __typename: "Device";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type ListDevicesQuery = {
  __typename: "ModelDeviceConnection";
  items: Array<{
    __typename: "Device";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateTokensSubscription = {
  __typename: "Tokens";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateTokensSubscription = {
  __typename: "Tokens";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteTokensSubscription = {
  __typename: "Tokens";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateFilesSubscription = {
  __typename: "Files";
  id: string;
  name: string;
  description: string | null;
  tokens: Array<{
    __typename: "Tokens";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  }> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateFilesSubscription = {
  __typename: "Files";
  id: string;
  name: string;
  description: string | null;
  tokens: Array<{
    __typename: "Tokens";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  }> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteFilesSubscription = {
  __typename: "Files";
  id: string;
  name: string;
  description: string | null;
  tokens: Array<{
    __typename: "Tokens";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  }> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateDeviceSubscription = {
  __typename: "Device";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateDeviceSubscription = {
  __typename: "Device";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteDeviceSubscription = {
  __typename: "Device";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateTokens(
    input: CreateTokensInput,
    condition?: ModelTokensConditionInput
  ): Promise<CreateTokensMutation> {
    const statement = `mutation CreateTokens($input: CreateTokensInput!, $condition: ModelTokensConditionInput) {
        createTokens(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTokensMutation>response.data.createTokens;
  }
  async UpdateTokens(
    input: UpdateTokensInput,
    condition?: ModelTokensConditionInput
  ): Promise<UpdateTokensMutation> {
    const statement = `mutation UpdateTokens($input: UpdateTokensInput!, $condition: ModelTokensConditionInput) {
        updateTokens(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTokensMutation>response.data.updateTokens;
  }
  async DeleteTokens(
    input: DeleteTokensInput,
    condition?: ModelTokensConditionInput
  ): Promise<DeleteTokensMutation> {
    const statement = `mutation DeleteTokens($input: DeleteTokensInput!, $condition: ModelTokensConditionInput) {
        deleteTokens(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTokensMutation>response.data.deleteTokens;
  }
  async CreateFiles(
    input: CreateFilesInput,
    condition?: ModelFilesConditionInput
  ): Promise<CreateFilesMutation> {
    const statement = `mutation CreateFiles($input: CreateFilesInput!, $condition: ModelFilesConditionInput) {
        createFiles(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          tokens {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateFilesMutation>response.data.createFiles;
  }
  async UpdateFiles(
    input: UpdateFilesInput,
    condition?: ModelFilesConditionInput
  ): Promise<UpdateFilesMutation> {
    const statement = `mutation UpdateFiles($input: UpdateFilesInput!, $condition: ModelFilesConditionInput) {
        updateFiles(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          tokens {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateFilesMutation>response.data.updateFiles;
  }
  async DeleteFiles(
    input: DeleteFilesInput,
    condition?: ModelFilesConditionInput
  ): Promise<DeleteFilesMutation> {
    const statement = `mutation DeleteFiles($input: DeleteFilesInput!, $condition: ModelFilesConditionInput) {
        deleteFiles(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          tokens {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteFilesMutation>response.data.deleteFiles;
  }
  async CreateDevice(
    input: CreateDeviceInput,
    condition?: ModelDeviceConditionInput
  ): Promise<CreateDeviceMutation> {
    const statement = `mutation CreateDevice($input: CreateDeviceInput!, $condition: ModelDeviceConditionInput) {
        createDevice(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateDeviceMutation>response.data.createDevice;
  }
  async UpdateDevice(
    input: UpdateDeviceInput,
    condition?: ModelDeviceConditionInput
  ): Promise<UpdateDeviceMutation> {
    const statement = `mutation UpdateDevice($input: UpdateDeviceInput!, $condition: ModelDeviceConditionInput) {
        updateDevice(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateDeviceMutation>response.data.updateDevice;
  }
  async DeleteDevice(
    input: DeleteDeviceInput,
    condition?: ModelDeviceConditionInput
  ): Promise<DeleteDeviceMutation> {
    const statement = `mutation DeleteDevice($input: DeleteDeviceInput!, $condition: ModelDeviceConditionInput) {
        deleteDevice(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteDeviceMutation>response.data.deleteDevice;
  }
  async GetTokens(id: string): Promise<GetTokensQuery> {
    const statement = `query GetTokens($id: ID!) {
        getTokens(id: $id) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTokensQuery>response.data.getTokens;
  }
  async ListTokenss(
    filter?: ModelTokensFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTokenssQuery> {
    const statement = `query ListTokenss($filter: ModelTokensFilterInput, $limit: Int, $nextToken: String) {
        listTokenss(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTokenssQuery>response.data.listTokenss;
  }
  async GetFiles(id: string): Promise<GetFilesQuery> {
    const statement = `query GetFiles($id: ID!) {
        getFiles(id: $id) {
          __typename
          id
          name
          description
          tokens {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetFilesQuery>response.data.getFiles;
  }
  async ListFiless(
    filter?: ModelFilesFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListFilessQuery> {
    const statement = `query ListFiless($filter: ModelFilesFilterInput, $limit: Int, $nextToken: String) {
        listFiless(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            tokens {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListFilessQuery>response.data.listFiless;
  }
  async GetDevice(id: string): Promise<GetDeviceQuery> {
    const statement = `query GetDevice($id: ID!) {
        getDevice(id: $id) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetDeviceQuery>response.data.getDevice;
  }
  async ListDevices(
    filter?: ModelDeviceFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListDevicesQuery> {
    const statement = `query ListDevices($filter: ModelDeviceFilterInput, $limit: Int, $nextToken: String) {
        listDevices(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListDevicesQuery>response.data.listDevices;
  }
  OnCreateTokensListener: Observable<OnCreateTokensSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateTokens {
        onCreateTokens {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateTokensSubscription>;

  OnUpdateTokensListener: Observable<OnUpdateTokensSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTokens {
        onUpdateTokens {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateTokensSubscription>;

  OnDeleteTokensListener: Observable<OnDeleteTokensSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTokens {
        onDeleteTokens {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteTokensSubscription>;

  OnCreateFilesListener: Observable<OnCreateFilesSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateFiles {
        onCreateFiles {
          __typename
          id
          name
          description
          tokens {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateFilesSubscription>;

  OnUpdateFilesListener: Observable<OnUpdateFilesSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateFiles {
        onUpdateFiles {
          __typename
          id
          name
          description
          tokens {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateFilesSubscription>;

  OnDeleteFilesListener: Observable<OnDeleteFilesSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteFiles {
        onDeleteFiles {
          __typename
          id
          name
          description
          tokens {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteFilesSubscription>;

  OnCreateDeviceListener: Observable<OnCreateDeviceSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateDevice {
        onCreateDevice {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateDeviceSubscription>;

  OnUpdateDeviceListener: Observable<OnUpdateDeviceSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateDevice {
        onUpdateDevice {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateDeviceSubscription>;

  OnDeleteDeviceListener: Observable<OnDeleteDeviceSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteDevice {
        onDeleteDevice {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteDeviceSubscription>;
}
