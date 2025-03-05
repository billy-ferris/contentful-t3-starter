const config = {
  contentful: {
    // TODO: use env.js?
    space_id: process.env.CONTENTFUL_SPACE_ID,
    cda_token: process.env.CONTENTFUL_ACCESS_TOKEN,
    cpa_token: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  },
};

export default config;
