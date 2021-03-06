import { ApiResponse } from "apisauce"

import { Api } from "./api"
import { GetRoomsResult, PostContactResult } from "./api.types"
import { getGeneralApiProblem } from "./api-problem"
import { Platform } from "react-native"

export class RoomsApi {
  private api: Api

  constructor(api: Api) {
    this.api = api
  }

  async loadRooms(center: number[], distance: number): Promise<GetRoomsResult> {
    try {
      const response: ApiResponse<any> = await this.api.apisauce.put(
        `rooms`,
        {
          lng: Number(center[0]),
          lat: Number(center[1]),
          distance: Math.round(distance || 1000),
        },
        {
          headers: {
            "X-OS-Type": Platform.select({
              ios: "iOS",
              android: "Android",
            }),
          },
        },
      )
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
