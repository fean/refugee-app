import { ApiResponse } from "apisauce"

import { Api } from "./api"
import { GenericRequestResult, GetContactsResult } from "./api.types"
import { getGeneralApiProblem } from "./api-problem"
import { objectIdToDate } from "../../utils/date"

export class ContactsApi {
  private api: Api

  constructor(api: Api) {
    this.api = api
  }

  async findContacts(): Promise<GetContactsResult> {
    try {
      const response: ApiResponse<any> = await this.api.apisauce.get(`contacts`)
      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) return problem
      }

      const mapped = response.data.map((item) => ({
        ...item,
        date: objectIdToDate(item.id),
      }))

      return { kind: "ok", contacts: mapped }
    } catch (e) {
      __DEV__ && console.tron.log(e.message)
      return { kind: "bad-data" }
    }
  }

  async approveContact(contactId: string): Promise<GenericRequestResult> {
    try {
      const response: ApiResponse<any> = await this.api.apisauce.put(`contacts/approval`, {
        contactId,
        approval: "Approved",
      })
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
