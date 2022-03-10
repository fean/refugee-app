import { Instance, SnapshotOut, types } from "mobx-state-tree"

export const UserModel = types.model("User").props({
  id: types.identifier,
  type: types.string,
  state: types.string,
  name: types.maybe(types.string),
  contactName: types.maybe(types.string),
  orgName: types.maybe(types.string),
  mission: types.maybe(types.string),
  contact: types.model({
    phone: types.string,
    email: types.string,
    website: types.maybe(types.string),
  }),
  location: types.model({
    nrBeds: types.maybe(types.number),
    address: types.string,
    postal: types.string,
    city: types.string,
    country: types.string,
    coords: types.array(types.number),
  }),
})

type UserType = Instance<typeof UserModel>
export interface User extends UserType {}
type UserSnapshotType = SnapshotOut<typeof UserModel>
export interface UserSnapshot extends UserSnapshotType {}
