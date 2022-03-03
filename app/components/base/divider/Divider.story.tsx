import * as React from "react"
import { storiesOf } from "@storybook/react-native"

import { StoryScreen, Story, UseCase } from "../../../../storybook/views"

import { Divider } from "./Divider"

declare let module

const style = {
  margin: 8,
}

storiesOf("Divider", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Simple", () => (
    <Story>
      <UseCase text="Simple" usage="A simple divider.">
        <Divider style={style} />
      </UseCase>
    </Story>
  ))
