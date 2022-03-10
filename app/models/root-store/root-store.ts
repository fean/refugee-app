import { Instance, SnapshotOut, types } from "mobx-state-tree"

import { LocationStoreModel } from "../location-store/location-store"
import { UserStoreModel } from "../user-store"
import { ContactStoreModel } from "../contact-store"
import { RoomStoreModel } from "../room-store"

/**
 * A RootStore model.
 */
// prettier-ignore
export const RootStoreModel = types.model("RootStore").props({
  locationStore: types.optional(LocationStoreModel, {} as any),
  userStore: types.optional(UserStoreModel, {} as any),
  contactStore: types.optional(ContactStoreModel, {} as any),
  roomStore: types.optional(RoomStoreModel, {} as any),
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
