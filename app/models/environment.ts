import { Api } from "../services/api"
import { MAPBOX_API_CONFIG } from "../services/api/api-config"
import { GeocodingApi } from "../services/api/geocoding-api"
import { UserApi } from "../services/api/user-api"
import { ContactsApi } from "../services/api/contacts-api"
import { RootStore } from "./root-store/root-store"
import { RoomsApi } from "../services/api/rooms-api"

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
  public rootStore: RootStore

  constructor() {
    // create each service
    if (__DEV__) {
      // dev-only services
      this.reactotron = new ReactotronDev()
    }
  }

  async setup(rootStore) {
    this.rootStore = rootStore

    // allow each service to setup
    if (__DEV__) {
      await this.reactotron.setup()
    }

    this.api = new Api(this)
    this.mapBox = new Api(this, MAPBOX_API_CONFIG)

    await Promise.all([this.api.setup(rootStore.userStore.accessToken), this.mapBox.setup()])

    this.geocodingApi = new GeocodingApi(this.mapBox)
    this.userApi = new UserApi(this.api)
    this.contactsApi = new ContactsApi(this.api)
    this.roomsApi = new RoomsApi(this.api)
  }

  reactotron: typeof ReactotronDev

  api: Api

  mapBox: Api

  geocodingApi: GeocodingApi

  userApi: UserApi

  contactsApi: ContactsApi

  roomsApi: RoomsApi
}
