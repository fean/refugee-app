import * as React from "react"
import { ViewStyle } from "react-native"
import { storiesOf } from "@storybook/react-native"
import sub from "date-fns/sub"

import { StoryScreen, Story, UseCase } from "../../../storybook/views"

import { Panel } from "./Basic"
import { StatusPanel } from "./Status"
import { Typography } from "../typography/Typography"

declare let module

const PANEL: ViewStyle = {
  marginTop: 48,
  width: 250,
  height: 100,
  marginBottom: 48,
}

const ago = sub(new Date(), { hours: 2 })

storiesOf("Panel", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Basic", () => (
    <Story>
      <UseCase text="Basic panel" usage="A basic panel">
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
