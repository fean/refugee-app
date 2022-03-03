import * as React from "react"
import { Alert } from "react-native"
import { storiesOf } from "@storybook/react-native"
import Icon from "react-native-vector-icons/Ionicons"

import { StoryScreen, Story, UseCase } from "../../../../storybook/views"
import { color } from "../../../theme"

import { Button } from "./Button"

declare let module

const BUTTON = {
  marginBottom: 8,
}

storiesOf("Buttons", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Simple button", () => (
    <Story>
      <UseCase text="Simple" usage="The simple & basic button.">
        <Button style={BUTTON} text="Click me!" onPress={() => Alert.alert("pressed")} />
        <Button style={BUTTON} text="Click me!" disabled onPress={() => Alert.alert("pressed")} />
      </UseCase>
      <UseCase text="With icon" usage="The simple & basic button with an icon.">
        <Button
          style={BUTTON}
          icon={<Icon name="link" size={16} color={color.palette.white} />}
          text="Click me!"
          onPress={() => Alert.alert("pressed")}
        />
        <Button
          style={BUTTON}
          icon={<Icon name="link" size={16} color={color.palette.white} />}
          text="Click me!"
          disabled
          onPress={() => Alert.alert("pressed")}
        />
      </UseCase>
      <UseCase text="Icon only" usage="The icon only button.">
        <Button
          style={BUTTON}
          icon={<Icon name="link" size={16} color={color.palette.white} />}
          onPress={() => Alert.alert("pressed")}
        />
        <Button
          style={BUTTON}
          disabled
          icon={<Icon name="link" size={16} color={color.palette.white} />}
          onPress={() => Alert.alert("pressed")}
        />
      </UseCase>
    </Story>
  ))
