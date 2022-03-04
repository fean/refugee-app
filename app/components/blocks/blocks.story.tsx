/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { Formik } from "formik"

import { StoryScreen, Story, UseCase } from "../../../storybook/views"

import { HomeownerDetails } from "./homeowner-details-block/HomeownerDetails"
import { HomeownerLocation } from "./homeowner-location-block/HomeownerLocation"
import { NumericHeader } from "./numeric-header-block/NumericHeader"

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
  .add("Numeric header block", () => (
    <Story>
      <UseCase text="Numeric header block" usage="A block with numeric value, title and text.">
        <NumericHeader
          option="1"
          title="Your details"
          text="These details let us connect with you."
        />
      </UseCase>

      <UseCase
        text="Block with long text"
        usage="A block with numeric value, title and a long piece of text."
      >
        <NumericHeader
          option="2"
          title="We publish your space"
          text="We publish your space to our hand-approved partners without your personal details. Your details are yours. "
        />
      </UseCase>
    </Story>
  ))
