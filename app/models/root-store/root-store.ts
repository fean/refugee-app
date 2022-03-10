import { Instance, SnapshotOut, types } from "mobx-state-tree"

import { LocationStoreModel } from "../location-store/location-store"
import { UserStoreModel } from "../user-store"
import { ContactStoreModel } from "../contact-store"

/**
 * A RootStore model.
 */
// prettier-ignore
export const RootStoreModel = types.model("RootStore").props({
  locationStore: types.optional(LocationStoreModel, {} as any),
  userStore: types.optional(UserStoreModel, {} as any),
  contactStore: types.optional(ContactStoreModel, {} as any),
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
