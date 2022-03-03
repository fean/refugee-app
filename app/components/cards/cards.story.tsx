import * as React from "react"
import { storiesOf } from "@storybook/react-native"

import { StoryScreen, Story, UseCase } from "../../../storybook/views"

import { CountryCard } from "./country-card/CountryCard"
import { Alert, ViewStyle } from "react-native"

declare let module

const CARD: ViewStyle = {
  margin: 8,
}

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
