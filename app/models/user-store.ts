import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { withEnvironment } from "./extensions/with-environment"

import { User, UserModel, UserSnapshot } from "./User"
import { HomeownerFormValues, PartnerFormValues } from "../screens"
import { countries } from "../components/cards/country-card/CountryCard.countries"

export const UserStoreModel = types
  .model("AuthStore")
  .props({
    isLoggedIn: types.optional(types.boolean, false),
    email: types.maybe(types.string),
    user: types.maybe(UserModel),
    accessToken: types.maybe(types.string),
    refreshToken: types.maybe(types.string),
  })
  .extend(withEnvironment)
  .actions((self) => ({
    saveEmail: (email: string) => {
      self.email = email
    },
    saveUser: (userSnap: UserSnapshot) => {
      self.user = userSnap as any
    },
    saveTokens: (accessToken: string, refreshToken: string) => {
      self.accessToken = accessToken
      self.refreshToken = refreshToken

      self.environment.api.setup(accessToken)
    },
    saveIsLoggedIn: (isLoggedIn: boolean) => {
      self.isLoggedIn = isLoggedIn
    },
  }))
  .actions((self) => ({
    doSendEmail: async (email: string): Promise<void> => {
      self.saveEmail(email)

      const result = await self.environment.userApi.sendAuthEmail(email)
      if (result.kind !== "ok") {
        console.warn("Request failed: ", result.kind)
        throw new Error()
      }
    },
    doAuthenticate: async (otp: string): Promise<void> => {
      const result = await self.environment.userApi.exchangeOTP(self.email, otp)

      if (result.kind === "ok") {
        self.saveTokens(result.accessToken, result.refreshToken)
      } else {
        console.warn("Request failed otp: ", result.kind)
        throw new Error()
      }
    },
    doRefresh: async (): Promise<void> => {
      if (!self.refreshToken) {
        throw new Error()
      }

      const result = await self.environment.userApi.refreshToken(self.refreshToken)
      if (result.kind === "ok") {
        self.saveTokens(result.accessToken, result.refreshToken)
      } else {
        console.warn("Request failed: ", result.kind)
        self.saveIsLoggedIn(false)
      }
    },
    loadProfile: async (): Promise<User> => {
      const result = await self.environment.userApi.getMe()
      if (result.kind === "ok") {
        self.saveUser(result.user)
        return result.user
      } else {
        console.warn("Request failed me: ", result.kind)
        throw new Error()
      }
    },
    createPartner: async (details: PartnerFormValues): Promise<void> => {
      const result = await self.environment.userApi.createPartner({
        captchaToken: "AAAA",
        contact: details.details.contactName,
        orgName: details.details.orgName,
        email: details.details.email,
        website: details.details.website,
        phoneCountry: countries[details.details.country].phone,
        phone: details.details.phone,
        address: details.location.address,
        postal: details.location.postal,
        city: details.location.city,
        country: details.location.country,
        mission: details.motivation.mission,
        approvalReason: details.motivation.motivation,
      })

      if (result.kind !== "ok") {
        console.warn("Request failed me: ", result.kind)
        throw new Error()
      }
    },
    createHomeowner: async (details: HomeownerFormValues): Promise<void> => {
      const result = await self.environment.userApi.createHomeowner({
        captchaToken: "AAAA",
        name: details.details.fullName,
        email: details.details.email,
        phoneCountry: countries[details.details.country].phone,
        phone: details.details.phone,
        address: details.location.address,
        postal: details.location.postal,
        city: details.location.city,
        country: details.location.country,
        beds: details.place.beds,
        ownershipType: details.place.type,
      })

      if (result.kind !== "ok") {
        console.warn("Request failed me: ", result.kind)
        throw new Error()
      }
    },
  }))

type UserStoreType = Instance<typeof UserStoreModel>
export interface UserStore extends UserStoreType {}
type UserStoreSnapshotType = SnapshotOut<typeof UserStoreModel>
export interface UserStoreSnapshot extends UserStoreSnapshotType {}
