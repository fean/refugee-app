import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { withEnvironment } from "./extensions/with-environment"

import { RoomModel, RoomSnapshot } from "./Room"

export const RoomStoreModel = types
  .model("RoomStore")
  .props({
    rooms: types.optional(types.array(RoomModel), []),
  })
  .extend(withEnvironment)
  .actions((self) => ({
    saveRooms: (rooms: RoomSnapshot[]) => {
      self.rooms = rooms as any
    },
  }))
  .actions((self) => ({
    loadRooms: async (center: number[], distance: number): Promise<void> => {
      const result = await self.environment.roomsApi.loadRooms(center, distance)
      if (result.kind !== "ok") {
        console.warn("Request failed contacts: ", result.kind)
        throw new Error(result.kind)
      }

      self.saveRooms(result.rooms as any)
    },
  }))

type RoomStoreType = Instance<typeof RoomStoreModel>
export interface RoomStore extends RoomStoreType {}
type RoomStoreSnapshotType = SnapshotOut<typeof RoomStoreModel>
export interface RoomStoreSnapshot extends RoomStoreSnapshotType {}
