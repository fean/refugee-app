import { Api } from "../services/api"
import { MAPBOX_API_CONFIG } from "../services/api/api-config"

let ReactotronDev
if (__DEV__) {
  const { Reactotron } = require("../services/reactotron")
  ReactotronDev = Reactotron
}

/**
 * The environment is a place where services and shared dependencies between
 * models live.  They are made available to every model via dependency injection.
 */
export class Environment {
  constructor() {
    // create each service
    if (__DEV__) {
      // dev-only services
      this.reactotron = new ReactotronDev()
    }

    this.api = new Api()
    this.mapBox = new Api(MAPBOX_API_CONFIG)
  }

  async setup() {
    // allow each service to setup
    if (__DEV__) {
      await this.reactotron.setup()
    }

    await Promise.all([this.api.setup(), this.mapBox.setup()])
  }

  /**
   * Reactotron is only available in dev.
   */
  reactotron: typeof ReactotronDev

  /**
   * Our api.
   */
  api: Api

  /**
   * The MapBox API
   */
  mapBox: Api
}
