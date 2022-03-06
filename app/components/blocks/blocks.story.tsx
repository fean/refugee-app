/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { Formik } from "formik"

import { StoryScreen, Story, UseCase } from "../../../storybook/views"

import { HomeownerDetails } from "./homeowner-details-block/HomeownerDetails"
import { HomeownerLocation } from "./homeowner-location-block/HomeownerLocation"
import { NumericHeader } from "./numeric-header-block/NumericHeader"
import { HomeownerPlace } from "./homeowner-place-block/HomeownerPlace"
import { PartnerDetails } from "./partner-details-block/PartnerDetails"
import { PartnerMotivation } from "./partner-motivation-block/PartnerMotivation"
import { ContactHeader } from "./contact-header/ContactHeader"
import { TextExplainer } from "./text-explainer/TextExplainer"

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
  .add("Homeowner space", () => (
    <Story>
      <UseCase
        text="Homeowner space block"
        usage="A block in which the homeowner can supply their space details."
      >
        <Formik initialValues={{ place: { type: "", beds: "" } }} onSubmit={() => {}}>
          <HomeownerPlace blockName="place" />
        </Formik>
      </UseCase>
    </Story>
  ))
  .add("Partner details", () => (
    <Story>
      <UseCase
        text="Partner details block"
        usage="A block in which the partner can supply their details."
      >
        <Formik initialValues={{ place: { type: "", beds: "" } }} onSubmit={() => {}}>
          <PartnerDetails blockName="place" />
        </Formik>
      </UseCase>
    </Story>
  ))
  .add("Partner motivation", () => (
    <Story>
      <UseCase
        text="Partner motivation block"
        usage="A block in which the partner can supply their motivation for joining."
      >
        <Formik initialValues={{ motivation: { mission: "", motivation: "" } }} onSubmit={() => {}}>
          <PartnerMotivation blockName="motivation" />
        </Formik>
      </UseCase>
    </Story>
  ))
  .add("Contact header", () => (
    <Story>
      <UseCase
        text="Contact header"
        usage="A header showing off the contact name and contact options."
      >
        <ContactHeader name="Johnny Samaritan" email="johnny@gmail.com" phone="+31612345678" />
      </UseCase>

      <UseCase
        text="Contact header"
        usage="A header showing off the contact name and contact options."
      >
        <ContactHeader
          name="Awesome NGO"
          email="awesome@ngo.com"
          phone="+31612345678"
          website={"https://ngo.com"}
        />
      </UseCase>
    </Story>
  ))
  .add("Text explainer", () => (
    <Story>
      <UseCase text="Text explainer" usage="A simple explainer.">
        <TextExplainer
          icon="rocket"
          title="Mission statement"
          text="We are an awesome NGO that helps find refugees a place in Europe to temporarily stay."
        />
      </UseCase>
      <UseCase text="Multiline explainer" usage="A simple explainer with multiline values.">
        <TextExplainer
          icon="business"
          title="Address"
          text={["Prinsengracht 2", "1722GM Zuid-scharwoude", "The netherlands"]}
        />
      </UseCase>
    </Story>
  ))
