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
      self.rooms.replace(rooms as any)
    },
  }))
  .actions((self) => ({
    loadRooms: async (center: number[], distance: number): Promise<void> => {
      const result = await self.environment.roomsApi.loadRooms(center, distance)
      if (result.kind !== "ok") {
        console.warn("Request failed contacts: ", result.kind)
        throw new Error(result.kind)
      }

      const {
        contactStore: { originIds },
      } = self.environment.rootStore

      const filteredRooms = result.rooms.filter((room) => !originIds.includes(room.id))
      self.saveRooms(filteredRooms)
    },
    requestRoomDetails: async (roomId: string): Promise<void> => {
      const result = await self.environment.roomsApi.requestDetails(roomId)
      if (result.kind !== "ok") {
        console.warn("Request failed contacts: ", result.kind)
        throw new Error(result.kind)
      }

      self.environment.rootStore.contactStore.appendContact(result.contact)
      const {
        contactStore: { originIds },
      } = self.environment.rootStore
      const filteredRooms = self.rooms.filter((room) => !originIds.includes(room.id))
      self.saveRooms(filteredRooms)
    },
  }))

type RoomStoreType = Instance<typeof RoomStoreModel>
export interface RoomStore extends RoomStoreType {}
type RoomStoreSnapshotType = SnapshotOut<typeof RoomStoreModel>
export interface RoomStoreSnapshot extends RoomStoreSnapshotType {}
