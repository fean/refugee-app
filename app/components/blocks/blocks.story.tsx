/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { Formik } from "formik"

import { StoryScreen, Story, UseCase } from "../../../storybook/views"

import { HomeownerDetails } from "./homeowner-details-block/HomeownerDetails"
import { HomeownerLocation } from "./homeowner-location-block/HomeownerLocation"

declare let module

storiesOf("Blocks", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Homeowner details", () => (
    <Story>
      <UseCase
        text="Homeowner details block"
        usage="A block in which the homeowner can supply their details."
      >
        <Formik
          initialValues={{ details: { fullName: "", email: "", country: "", phone: "" } }}
          onSubmit={() => {}}
        >
          <HomeownerDetails blockName="details" />
        </Formik>
      </UseCase>
    </Story>
  ))
  .add("Homeowner location", () => (
    <Story>
      <UseCase
        text="Homeowner location block"
        usage="A block in which the homeowner can supply their location."
      >
        <Formik
          initialValues={{ location: { address: "", postal: "", city: "", country: "" } }}
          onSubmit={() => {}}
        >
          <HomeownerLocation blockName="location" />
        </Formik>
      </UseCase>
    </Story>
  ))
