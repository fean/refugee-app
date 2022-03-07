// Use this import if you want to use "env.js" file
// const { API_URL } = require("../../config/env")
// Or just specify it directly like this:
const API_URL = "http://example.com"

/**
 * The options used to configure the API.
 */
export interface ApiConfig {
  /**
   * The optional API token.
   */
  token?: string

  /**
   * The URL of the api.
   */
  url: string

  /**
   * Milliseconds before we timeout the request.
   */
  timeout: number
}

/**
 * The default configuration for the app.
 */
export const DEFAULT_API_CONFIG: ApiConfig = {
  url: API_URL || "https://jsonplaceholder.typicode.com",
  timeout: 10000,
}

export const MAPBOX_API_CONFIG: ApiConfig = {
  token:
    "pk.eyJ1IjoiZmVhbmFybzEwMSIsImEiOiJjbDBmaWVka2kwc3VwM2psZjU1czlxZGJpIn0.B1aFU0t9vAefwlVEWD8qQg",
  url: "https://api.mapbox.com",
  timeout: 10000,
}
