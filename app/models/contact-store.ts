import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { withEnvironment } from "./extensions/with-environment"

import { ContactModel, ContactSnapshot } from "./Contact"

export const ContactStoreModel = types
  .model("ContactStore")
  .props({
    contacts: types.array(ContactModel),
  })
  .extend(withEnvironment)
  .actions((self) => ({
    saveContacts: (contacts: ContactSnapshot[]) => {
      self.contacts = contacts as any
    },
    saveContactApproval: (contactId: string) => {
      const contact = self.contacts.find((entry) => entry.id === contactId)
      Object.assign(contact, {
        state: "Approval",
        approvalDate: new Date(),
      })
    },
  }))
  .actions((self) => ({
    loadContacts: async (): Promise<void> => {
      const result = await self.environment.contactsApi.findContacts()
      if (result.kind !== "ok") {
        console.warn("Request failed contacts: ", result.kind)
        throw new Error()
      }

      self.saveContacts(result.contacts as any)
    },
    approveContact: async (contactId: string): Promise<void> => {
      const result = await self.environment.contactsApi.approveContact(contactId)
      if (result.kind !== "ok") {
        console.warn("Request failed contacts: ", result.kind)
        throw new Error()
      }

      self.saveContactApproval(contactId)
    },
  }))

type ContactStoreType = Instance<typeof ContactStoreModel>
export interface ContactStore extends ContactStoreType {}
type ContactStoreSnapshotType = SnapshotOut<typeof ContactStoreModel>
export interface ContactStoreSnapshot extends ContactStoreSnapshotType {}
