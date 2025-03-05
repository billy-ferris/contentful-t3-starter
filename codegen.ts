import { type CodegenConfig } from "@graphql-codegen/cli";

import { env } from "./src/env.js";

const endpointOverride = process.env.CONTENTFUL_GRAPHQL_ENDPOINT;
const productionEndpoint = "https://graphql.contentful.com/content/v1/spaces";
export const endpoint = `${endpointOverride ?? productionEndpoint}/${
  env.CONTENTFUL_SPACE_ID
}/environments/${process.env.CONTENTFUL_SPACE_ENVIRONMENT ?? "master"}`;

export const config: CodegenConfig = {
  overwrite: true,
  ignoreNoDocuments: true,
  schema: [
    {
      [endpoint || ""]: {
        headers: {
          Authorization: `Bearer ${env.CONTENTFUL_ACCESS_TOKEN}`,
        },
      },
    },
  ],
  generates: {
    "./src/lib/__generated/gql.schema.json": {
      plugins: ["introspection"],
    },
    "./src/lib/__generated/gql.schema.graphql": {
      plugins: ["schema-ast"],
    },
    "./src/lib/__generated/sdk.ts": {
      documents: ["./src/"],
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      config: {
        rawRequest: false,
        inlineFragmentTypes: "combine",
        skipTypename: false,
        exportFragmentSpreadSubTypes: true,
        dedupeFragments: true,
        preResolveTypes: true,
      },
    },
  },
};

export default config;
