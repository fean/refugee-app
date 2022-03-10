import { Instance, SnapshotOut, types } from "mobx-state-tree"

export const RoomModel = types.model("Room").props({
  id: types.identifier,
  address: types.string,
  postal: types.string,
  city: types.string,
  country: types.string,
  coords: types.array(types.number),
  beds: types.number,
})

type RoomType = Instance<typeof RoomModel>
export interface Room extends RoomType {}
type RoomSnapshotType = SnapshotOut<typeof RoomModel>
export interface RoomSnapshot extends RoomSnapshotType {}
