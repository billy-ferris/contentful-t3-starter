import { env } from "./src/env";

const contentfulConfig = {
  space_id: env.CONTENTFUL_SPACE_ID,
  access_token: env.CONTENTFUL_ACCESS_TOKEN,
  preview_access_token: env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  environment: env.CONTENTFUL_SPACE_ENVIRONMENT,
  gql: {
    base_url: "https://graphql.contentful.com",
  },
};

export default contentfulConfig;
