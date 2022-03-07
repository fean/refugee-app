import { Instance, SnapshotOut, types } from "mobx-state-tree"

export const LocationModel = types.model("Location").props({
  id: types.identifier,
  name: types.maybe(types.string),
  geo: types.model("LatLng").props({
    longitude: types.number,
    latitude: types.number,
  }),
})

type LocationType = Instance<typeof LocationModel>
export interface Location extends LocationType {}
type LocationSnapshotType = SnapshotOut<typeof LocationModel>
export interface LocationSnapshot extends LocationSnapshotType {}
