import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { Alert } from "react-native"

import { StoryScreen, Story, UseCase } from "../../../storybook/views"

import { CountryModal } from "./country-select-modal/CountryModal"
import { Button } from "../base/button"

declare let module

const CountryModalWrapper = () => {
  const [isOpen, setOpen] = React.useState(false)

  const handleToggleModal = () => setOpen((open) => !open)
  const handleClose = (country) => {
    if (country) {
      Alert.alert(`Selected ${country.flag} with phone code ${country.phone}`)
    }
    handleToggleModal()
  }

  return (
    <Story>
      <UseCase text="Country selection" usage="A country selection modal.">
        <Button text="Open me!" onPress={handleToggleModal} />
        <CountryModal open={isOpen} onClose={handleClose} />
      </UseCase>
    </Story>
  )
}

storiesOf("Modals", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Country selection", () => <CountryModalWrapper />)
