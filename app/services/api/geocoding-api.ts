import { ApiResponse } from "apisauce"
import i18n from "i18n-js"

import { Location } from "../../models/location/location"
import { Api } from "./api"
import { GetMapPlacesResult } from "./api.types"
import { getGeneralApiProblem } from "./api-problem"

export class GeocodingApi {
  private api: Api

  constructor(api: Api) {
    this.api = api
  }

  async queryLocations(query: string, limit = 5): Promise<GetMapPlacesResult> {
    try {
      const urlQuery = encodeURI(query)
      const response: ApiResponse<any> = await this.api.apisauce.get(
        `geocoding/v5/mapbox.places/${urlQuery}.json`,
        {
          autocomplete: true,
          access_token: this.api.config.token,
          language: i18n.locale,
          types: "place,address",
          limit,
        },
      )

      // the typical ways to die when calling an api
      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) return problem
      }

      const locations = response.data.features.map(
        (feature) =>
          ({
            id: feature.id,
            name: feature.place_name,
            geo: {
              latitude: feature.center[1],
              longitude: feature.center[0],
            },
          } as Location),
      )

      return { kind: "ok", locations }
    } catch (e) {
      __DEV__ && console.tron.log(e.message)
      return { kind: "bad-data" }
    }
  }
}
