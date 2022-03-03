import * as React from "react"
import { Alert, ViewStyle } from "react-native"
import { storiesOf } from "@storybook/react-native"
import Icon from "react-native-vector-icons/Ionicons"
import sub from "date-fns/sub"

import { StoryScreen, Story, UseCase } from "../../../storybook/views"

import { color } from "../../theme"

import { Avatar } from "./avatar/Avatar"
import { Divider } from "./divider/Divider"
import { Button, IconButton, TextButton } from "./button"
import { Input } from "./input/Input"
import { Modal } from "./modal/Modal"
import { Typography } from "./typography/Typography"
import { Number } from "./number/Number"
import { Panel, StatusPanel } from "./panel"

declare let module

const ModalWrapper = () => {
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

const BUTTON = {
  marginBottom: 8,
}

const DIVIDER = {
  margin: 8,
}

const USECASE: ViewStyle = {
  flexDirection: "column",
}

const NUMBER: ViewStyle = {
  margin: 8,
}

const PANEL: ViewStyle = {
  marginTop: 48,
  width: 250,
  height: 100,
  marginBottom: 48,
}

const ago = sub(new Date(), { hours: 2 })

storiesOf("Base", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Avatar", () => (
    <Story>
      <UseCase text="Text based avatar" usage="A simple divider.">
        <Avatar text="AN" />
      </UseCase>
    </Story>
  ))
  .add("Button", () => (
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
  .add("Text button", () => (
    <Story>
      <UseCase text="Simple" usage="A simple text based button">
        <TextButton
          icon={<Icon name="arrow-back" size={16} color={color.palette.text} />}
          text="Back"
          onPress={() => Alert.alert("pressed")}
        />
        <TextButton
          disabled
          icon={<Icon name="arrow-back" size={16} color={color.palette.textDisabled} />}
          text="Back"
          onPress={() => Alert.alert("pressed")}
        />
      </UseCase>
    </Story>
  ))
  .add("Icon button", () => (
    <Story>
      <UseCase text="Icon button" usage="A simple icon button">
        <IconButton
          icon={<Icon name="close-outline" size={16} color={color.palette.text} />}
          onPress={() => Alert.alert("pressed")}
        />
      </UseCase>
    </Story>
  ))
  .add("Divider", () => (
    <Story>
      <UseCase text="Divider" usage="A simple divider line.">
        <Divider style={DIVIDER} />
      </UseCase>
    </Story>
  ))
  .add("Input", () => (
    <Story>
      <UseCase text="Placeholder">
        <Input placeholder="This is a placeholder" />
      </UseCase>
      <UseCase text="With text">
        <Input value="This is something I wrote" />
      </UseCase>
    </Story>
  ))
  .add("Modal", () => <ModalWrapper />)
  .add("Number", () => (
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
  .add("Basic panel", () => (
    <Story>
      <UseCase text="Basic" usage="A basic panel">
        <Panel style={PANEL} />
      </UseCase>
    </Story>
  ))
  .add("Status panel", () => (
    <Story>
      <UseCase text="Status Approved" usage="A panel that has a status symbol">
        <StatusPanel status="approved" panelStyle={PANEL} date={ago}>
          <Typography variant="header">This is great!</Typography>
        </StatusPanel>
      </UseCase>

      <UseCase text="Status Pending" usage="A panel that has a status symbol">
        <StatusPanel status="pending" panelStyle={PANEL} date={ago}>
          <Typography variant="header">This is great!</Typography>
        </StatusPanel>
      </UseCase>
    </Story>
  ))
  .add("Typography", () => (
    <Story>
      <UseCase text="Title">
        <Typography variant="title" color="text">
          This is a piece of text!
        </Typography>
        <Typography variant="title" color="shade">
          This is a piece of text!
        </Typography>
        <Typography variant="title" color="placeholder">
          This is a piece of text!
        </Typography>
        <Typography variant="title" color="disabled">
          This is a piece of text!
        </Typography>
        <Typography variant="title" color="warn">
          This is a piece of text!
        </Typography>
        <Typography variant="title" color="accepted">
          This is a piece of text!
        </Typography>
      </UseCase>
      <UseCase text="Header">
        <Typography variant="header" color="text">
          This is a piece of text!
        </Typography>
        <Typography variant="header" color="shade">
          This is a piece of text!
        </Typography>
        <Typography variant="header" color="placeholder">
          This is a piece of text!
        </Typography>
        <Typography variant="header" color="disabled">
          This is a piece of text!
        </Typography>
        <Typography variant="header" color="warn">
          This is a piece of text!
        </Typography>
        <Typography variant="header" color="accepted">
          This is a piece of text!
        </Typography>
      </UseCase>
      <UseCase text="Text">
        <Typography variant="text" color="text">
          This is a piece of text!
        </Typography>
        <Typography variant="text" color="shade">
          This is a piece of text!
        </Typography>
        <Typography variant="text" color="placeholder">
          This is a piece of text!
        </Typography>
        <Typography variant="text" color="disabled">
          This is a piece of text!
        </Typography>
        <Typography variant="text" color="warn">
          This is a piece of text!
        </Typography>
        <Typography variant="text" color="accepted">
          This is a piece of text!
        </Typography>
      </UseCase>
      <UseCase text="Chip">
        <Typography variant="chip" color="text">
          This is a piece of text!
        </Typography>
        <Typography variant="chip" color="shade">
          This is a piece of text!
        </Typography>
        <Typography variant="chip" color="placeholder">
          This is a piece of text!
        </Typography>
        <Typography variant="chip" color="disabled">
          This is a piece of text!
        </Typography>
        <Typography variant="chip" color="warn">
          This is a piece of text!
        </Typography>
        <Typography variant="chip" color="accepted">
          This is a piece of text!
        </Typography>
      </UseCase>
    </Story>
  ))
