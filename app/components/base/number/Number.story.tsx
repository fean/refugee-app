import * as React from "react"
import { ViewStyle } from "react-native"
import { storiesOf } from "@storybook/react-native"

import { StoryScreen, Story, UseCase } from "../../../../storybook/views"

import { Number } from "./Number"

declare let module

const USECASE: ViewStyle = {
  flexDirection: "column",
}

const NUMBER: ViewStyle = {
  margin: 8,
}

storiesOf("Number", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Basic", () => (
    <Story>
      <UseCase
        text="Number visualizer"
        usage="A basic number and completion visualizer"
        style={USECASE}
      >
        <Number style={NUMBER} option="1" />
        <Number style={NUMBER} option="2" />
        <Number style={NUMBER} option="3" />
        <Number style={NUMBER} option="4" />
        <Number style={NUMBER} option="complete" />
      </UseCase>
    </Story>
  ))
