import * as React from "react"
import { storiesOf } from "@storybook/react-native"

import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { Typography } from "./Typography"

declare let module

storiesOf("Typography", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("All styles/colors", () => (
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
