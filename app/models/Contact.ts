import { Instance, SnapshotOut, types } from "mobx-state-tree"

export const ContactModel = types.model("Contact").props({
  id: types.identifier,
  state: types.string,
  origin: types.maybe(types.string),
  name: types.maybe(types.string),
  date: types.maybe(types.Date),
  approvalDate: types.maybe(types.Date),
  mission: types.maybe(types.string),
  contact: types.maybe(
    types.model({
      phone: types.string,
      email: types.string,
      website: types.maybe(types.string),
    }),
  ),
  location: types.model({
    address: types.string,
    postal: types.string,
    city: types.string,
    country: types.string,
    coords: types.array(types.number),
    nrBeds: types.maybe(types.number),
  }),
})

type ContactType = Instance<typeof ContactModel>
export interface Contact extends ContactType {}
type ContactSnapshotType = SnapshotOut<typeof ContactModel>
export interface ContactSnapshot extends ContactSnapshotType {}
