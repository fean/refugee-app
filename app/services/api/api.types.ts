import { GeneralApiProblem } from "./api-problem"
import { Location } from "../../models/location/location"

export interface User {
  id: number
  name: string
}

export type GetUsersResult = { kind: "ok"; users: User[] } | GeneralApiProblem
export type GetUserResult = { kind: "ok"; user: User } | GeneralApiProblem

export type GetCharactersResult = { kind: "ok"; locations: Location[] } | GeneralApiProblem
