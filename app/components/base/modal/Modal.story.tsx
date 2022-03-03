import * as React from "react"
import { storiesOf } from "@storybook/react-native"

import { StoryScreen, Story, UseCase } from "../../../../storybook/views"

import { Modal } from "./Modal"
import { Typography } from "../typography/Typography"
import { Button } from "../button"

declare let module

const ModalComp = () => {
  const [isOpen, setOpen] = React.useState(false)

  const toggleOpen = () => setOpen((open) => !open)

  return (
    <Story>
      <UseCase text="Basic Modal">
        <Button onPress={toggleOpen} text="Open me!" />

        <Modal title="Select a country" open={isOpen} onClose={toggleOpen}>
          <Typography variant="text">It's working!</Typography>
        </Modal>
      </UseCase>
    </Story>
  )
}

storiesOf("Modal", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Basic", () => <ModalComp />)
