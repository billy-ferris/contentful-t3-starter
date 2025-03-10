import { GraphQLClient } from "graphql-request";
import { endpoint } from "codegen";

import { getSdk } from "~/lib/__generated/sdk";

// TODO: create path alias
import contentful from "../../contentful.config";

const graphQlClient = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${contentful.access_token}`,
  },
});

const previewGraphQlClient = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${contentful.preview_access_token}`,
  },
});

export const client = getSdk(graphQlClient);
export const previewClient = getSdk(previewGraphQlClient);
