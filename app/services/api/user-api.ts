import { ApiResponse } from "apisauce"

import { Api } from "./api"
import { GenericRequestResult, GetUserResult, PostTokenResult } from "./api.types"
import { getGeneralApiProblem } from "./api-problem"

export class UserApi {
  private api: Api

  constructor(api: Api) {
    this.api = api
  }

  async sendAuthEmail(email: string): Promise<GenericRequestResult> {
    try {
      const response: ApiResponse<any> = await this.api.apisauce.post(`auth/start`, { email })

      // the typical ways to die when calling an api
      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) return problem
      }

      return { kind: "ok" }
    } catch (e) {
      __DEV__ && console.tron.log(e.message)
      return { kind: "bad-data" }
    }
  }

  async exchangeOTP(email: string, otp: string): Promise<PostTokenResult> {
    try {
      const response: ApiResponse<any> = await this.api.apisauce.post(`auth/token`, {
        type: "otp",
        email,
        otp,
      })

      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) return problem
      }

      return { kind: "ok", ...response.data }
    } catch (e) {
      __DEV__ && console.tron.log(e.message)
      return { kind: "bad-data" }
    }
  }

  async refreshToken(refreshToken: string): Promise<PostTokenResult> {
    try {
      const response: ApiResponse<any> = await this.api.apisauce.post(`auth/token`, {
        type: "refresh",
        refreshToken,
      })

      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) return problem
      }

      return { kind: "ok", ...response.data }
    } catch (e) {
      __DEV__ && console.tron.log(e.message)
      return { kind: "bad-data" }
    }
  }

  async getMe(): Promise<GetUserResult> {
    try {
      const response: ApiResponse<any> = await this.api.apisauce.get(`me`)
      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) return problem
      }

      return { kind: "ok", user: response.data }
    } catch (e) {
      __DEV__ && console.tron.log(e.message)
      return { kind: "bad-data" }
    }
  }

  async savePushToken(token: string): Promise<GenericRequestResult> {
    try {
      const response: ApiResponse<any> = await this.api.apisauce.post(`me/push-token`, { token })
      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) return problem
      }

      return { kind: "ok" }
    } catch (e) {
      __DEV__ && console.tron.log(e.message)
      return { kind: "bad-data" }
    }
  }

  createPartner = async (request: any): Promise<GenericRequestResult> => {
    try {
      const response: ApiResponse<any> = await this.api.apisauce.post(`partners`, request)
      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) return problem
      }

      return { kind: "ok" }
    } catch (e) {
      __DEV__ && console.tron.log(e.message)
      return { kind: "bad-data" }
    }
  }

  createHomeowner = async (request: any): Promise<GenericRequestResult> => {
    try {
      const response: ApiResponse<any> = await this.api.apisauce.post(`homeowners`, request)
      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) return problem
      }

      return { kind: "ok" }
    } catch (e) {
      __DEV__ && console.tron.log(e.message)
      return { kind: "bad-data" }
    }
  }
}
