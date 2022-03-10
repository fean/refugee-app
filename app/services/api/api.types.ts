import { GeneralApiProblem } from "./api-problem"
import { Location } from "../../models/location/location"
import { User } from "../../models/User"
import { Contact } from "../../models/Contact"
import { Room } from "../../models/Room"

export interface RequestResult {
  kind: "ok"
}

export type GenericRequestResult = RequestResult | GeneralApiProblem

export type GetUserResult = (RequestResult & { user: User }) | GeneralApiProblem
export type GetMapPlacesResult = (RequestResult & { locations: Location[] }) | GeneralApiProblem
export type GetContactsResult = (RequestResult & { contacts: Contact[] }) | GeneralApiProblem
export type GetRoomsResult = (RequestResult & { rooms: Room[] }) | GeneralApiProblem

export type PostTokenResult =
  | (RequestResult & { accessToken: string; refreshToken: string })
  | GeneralApiProblem
