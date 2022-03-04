/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { Formik } from "formik"

import { StoryScreen, Story, UseCase } from "../../../storybook/views"

import { FormikCountrySelector } from "./country-selector/formik"
import { FormikValueSelector } from "./value-selector/formik"
import { Typography } from "../base/typography/Typography"

declare let module

const MARGINBOT = {
  marginBottom: 16,
}

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
  .add("Value selector", () => (
    <Story>
      <UseCase text="Value selection input" usage="A value selection input.">
        <Formik
          initialValues={{ agreementType: "" }}
          onSubmit={() => {
            /**/
          }}
        >
          {({ values: { agreementType } }) => (
            <>
              <Typography
                variant="header"
                style={MARGINBOT}
              >{`Value selected: ${agreementType}`}</Typography>
              <FormikValueSelector
                name="agreementType"
                values={[
                  { value: "owned", label: "Owned" },
                  { value: "leased", label: "Leased" },
                ]}
              />
            </>
          )}
        </Formik>
      </UseCase>
    </Story>
  ))
