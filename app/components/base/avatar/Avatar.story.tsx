import * as React from "react"
import { storiesOf } from "@storybook/react-native"

import { StoryScreen, Story, UseCase } from "../../../../storybook/views"

import { Avatar } from "./Avatar"

declare let module

storiesOf("Avatar", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Text based", () => (
    <Story>
      <UseCase text="Text based" usage="A basic text based avatar">
        <Avatar text="AN" />
      </UseCase>
    </Story>
  ))
