/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";
import headers from "./config/headers.js";

/** @type {import("next").NextConfig} */
const config = {
  headers,
};

export default config;
