import * as React from "react"
import { storiesOf } from "@storybook/react-native"

import { StoryScreen, Story, UseCase } from "../../../../storybook/views"

import { Input } from "./Input"

declare let module

storiesOf("Input", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Text", () => (
    <Story>
      <UseCase text="Placeholder">
        <Input placeholder="This is a placeholder" />
      </UseCase>
      <UseCase text="With text">
        <Input value="This is something I wrote" />
      </UseCase>
    </Story>
  ))
