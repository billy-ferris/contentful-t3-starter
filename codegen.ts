import { type CodegenConfig } from "@graphql-codegen/cli";

import contentful from "./contentful.config";

export const endpoint = `${contentful.gql.base_url}/content/v1/spaces/${
  contentful.space_id
}/environments/${contentful.environment}`;

export const config: CodegenConfig = {
  overwrite: true,
  ignoreNoDocuments: true,
  /*
   TODO: Can we add a query to only get content types prefixed with "HE-RD"?
   See: https://the-guild.dev/graphql/codegen/docs/config-reference/schema-field
  */
  schema: [
    {
      [endpoint]: {
        headers: {
          Authorization: `Bearer ${contentful.access_token}`,
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
