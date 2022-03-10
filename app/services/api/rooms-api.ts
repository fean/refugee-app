import { ApiResponse } from "apisauce"

import { Api } from "./api"
import { GetRoomsResult, PostContactResult } from "./api.types"
import { getGeneralApiProblem } from "./api-problem"

export class RoomsApi {
  private api: Api

  constructor(api: Api) {
    this.api = api
  }

  async loadRooms(center: number[], distance: number): Promise<GetRoomsResult> {
    try {
      const response: ApiResponse<any> = await this.api.apisauce.get(`rooms`, {
        lng: center[0],
        lat: center[1],
        distance: Math.round(distance),
      })
      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) return problem
      }

      return { kind: "ok", rooms: response.data }
    } catch (e) {
      __DEV__ && console.tron.log(e.message)
      return { kind: "bad-data" }
    }
  }

  async requestDetails(roomId: string): Promise<PostContactResult> {
    try {
      const response: ApiResponse<any> = await this.api.apisauce.post(`contacts`, {
        roomId,
      })
      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) return problem
      }

      return { kind: "ok", contact: response.data }
    } catch (e) {
      __DEV__ && console.tron.log(e.message)
      return { kind: "bad-data" }
    }
  }
}
