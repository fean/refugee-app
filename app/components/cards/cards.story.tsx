import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { Alert, ViewStyle } from "react-native"
import sub from "date-fns/sub"

import { StoryScreen, Story, UseCase } from "../../../storybook/views"

import { CountryCard } from "./country-card/CountryCard"
import { ContactRequest } from "./contact-request/ContactRequest"
import { PartnerContact } from "./partner-contact/PartnerContact"
import { MapSpace } from "./map-space/MapSpace"

declare let module

const CARD: ViewStyle = {
  margin: 8,
}

const ago = sub(new Date(), { hours: 2 })

storiesOf("Cards", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Country card", () => (
    <Story>
      <UseCase text="Country card" usage="A card showing the country and phone code.">
        <CountryCard
          style={CARD}
          country="nl"
          onPress={({ phone, flag }) => Alert.alert(`${flag} has phone code ${phone}`)}
        />
        <CountryCard
          style={CARD}
          country="de"
          onPress={({ phone, flag }) => Alert.alert(`${flag} has phone code ${phone}`)}
        />
      </UseCase>
    </Story>
  ))
  .add("Contact request card", () => (
    <Story>
      <UseCase
        text="Approved contact request"
        usage="A card showing a contact request from a partner."
      >
        <ContactRequest
          style={CARD}
          id="232439493423"
          state="approved"
          date={ago}
          name="Awesome NGO"
          mission="We are an awesome NGO that helps find refugees a place in Europe to temporarily stay."
          onPress={(id) => Alert.alert(`Pressed contact ${id}`)}
        />
      </UseCase>
      <UseCase
        text="Pending contact request"
        usage="A card showing a contact request from a partner."
      >
        <ContactRequest
          style={CARD}
          id="232439493423"
          state="pending"
          date={ago}
          name="Awesome NGO"
          mission="We are an awesome NGO that helps find refugees a place in Europe to temporarily stay."
          onPress={(id) => Alert.alert(`Pressed contact ${id}`)}
        />
      </UseCase>
    </Story>
  ))
  .add("Partner contact card", () => (
    <Story>
      <UseCase text="Approved contact">
        <PartnerContact
          style={CARD}
          id="5465464676"
          state="approved"
          name="Johnny Samaritan"
          date={ago}
          address="Rozenstraat 112-III"
          postal="1016 NZ"
          city="Amsterdam"
          onPress={(id) => Alert.alert(`Pressed contact ${id}`)}
        />
      </UseCase>
      <UseCase text="Pending contact">
        <PartnerContact
          style={CARD}
          id="5465464676"
          state="pending"
          name="Space for 1 person"
          date={ago}
          address="Rozenstraat 112-III"
          postal="1016 NZ"
          city="Amsterdam"
          onPress={(id) => Alert.alert(`Pressed contact ${id}`)}
        />
      </UseCase>
    </Story>
  ))
  .add("Map space card", () => (
    <Story>
      <UseCase text="Basic">
        <MapSpace
          id="456324"
          name="Space for 1 person"
          address="Kerkstraat 431-383"
          city="Amsterdam"
          onPress={(id) => Alert.alert(`Pressed space ${id}`)}
        />
      </UseCase>
    </Story>
  ))
