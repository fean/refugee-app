import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { LocationModel, LocationSnapshot } from "../location/location"
import { withEnvironment } from "../extensions/with-environment"

export const LocationStoreModel = types
  .model("LocationStore")
  .props({
    locations: types.optional(types.array(LocationModel), []),
  })
  .extend(withEnvironment)
  .actions((self) => ({
    saveLocations: (locationSnapshots: LocationSnapshot[]) => {
      self.locations.replace(locationSnapshots)
    },
  }))
  .actions((self) => ({
    queryLocations: async (query: string) => {
      const result = await self.environment.geocodingApi.queryLocations(query)

      if (result.kind === "ok") {
        self.saveLocations(result.locations)
      } else {
        __DEV__ && console.tron.log(result.kind)
      }
    },
  }))

type LocationStoreType = Instance<typeof LocationStoreModel>
export interface LocationStore extends LocationStoreType {}
type LocationStoreSnapshotType = SnapshotOut<typeof LocationStoreModel>
export interface LocationStoreSnapshot extends LocationStoreSnapshotType {}
export const createCharacterStoreDefaultModel = () => types.optional(LocationStoreModel, {})
