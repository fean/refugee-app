/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { Formik } from "formik"

import { StoryScreen, Story, UseCase } from "../../../storybook/views"

import { FormikCountrySelector } from "./country-selector/formik"

declare let module

storiesOf("Inputs", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Country selector", () => (
    <Story>
      <UseCase text="Country selection input" usage="A country selection input.">
        <Formik
          initialValues={{ country: "" }}
          onSubmit={() => {
            /**/
          }}
        >
          <FormikCountrySelector name="country" placeholder="Select your country" />
        </Formik>
      </UseCase>
    </Story>
  ))
