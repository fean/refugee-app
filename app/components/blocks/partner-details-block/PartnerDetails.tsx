import * as React from "react"
import { StyleProp, ViewStyle, StyleSheet, TextInput } from "react-native"

import { translate } from "../../../i18n"

import { Panel } from "../../base/panel"
import { FormikInput } from "../../base/input/formik"
import { FormikCountrySelector } from "../../inputs/country-selector/formik"
import { FieldWithLabel } from "../../inputs/field-with-label/FieldWithLabel"

interface HomeownerDetailsProps {
  style?: StyleProp<ViewStyle>
  blockName?: string
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: "column",
    padding: 16,
  },
  input: {
    flex: 1,
  },
})

export const PartnerDetails: React.FC<HomeownerDetailsProps> = ({
  style: styleOverride,
  blockName,
}) => {
  const nameRef = React.createRef<TextInput>()
  const emailRef = React.createRef<TextInput>()
  const phoneRef = React.createRef<TextInput>()
  const webRef = React.createRef<TextInput>()

  return (
    <Panel style={[styles.bar, styleOverride]}>
      <FieldWithLabel iconName="person" label="blocks.pa-details.contact">
        <FormikInput
          nextRef={nameRef}
          textContentType="name"
          returnKeyType="next"
          name={`${blockName}.contactName`}
          style={styles.input}
          placeholder={translate("blocks.pa-details.contactPlaceholder")}
        />
      </FieldWithLabel>
      <FieldWithLabel iconName="business" label="blocks.pa-details.orgName">
        <FormikInput
          ref={nameRef}
          nextRef={emailRef}
          textContentType="organizationName"
          returnKeyType="next"
          name={`${blockName}.orgName`}
          style={styles.input}
          placeholder={translate("blocks.pa-details.orgNamePlaceholder")}
        />
      </FieldWithLabel>
      <FieldWithLabel iconName="mail" label="blocks.pa-details.email">
        <FormikInput
          ref={emailRef}
          autoCapitalize="none"
          textContentType="emailAddress"
          keyboardType="email-address"
          returnKeyType="next"
          name={`${blockName}.email`}
          style={styles.input}
          placeholder={translate("blocks.pa-details.emailPlaceholder")}
        />
      </FieldWithLabel>
      <FieldWithLabel iconName="flag" label="blocks.pa-details.country">
        <FormikCountrySelector
          nextRef={phoneRef}
          name={`${blockName}.country`}
          style={styles.input}
          placeholder={translate("blocks.pa-details.countryPlaceholder")}
        />
      </FieldWithLabel>
      <FieldWithLabel iconName="call" label="blocks.pa-details.phone">
        <FormikInput
          ref={phoneRef}
          nextRef={webRef}
          textContentType="telephoneNumber"
          keyboardType="phone-pad"
          returnKeyType="next"
          name={`${blockName}.phone`}
          style={styles.input}
          placeholder={translate("blocks.pa-details.phonePlaceholder")}
        />
      </FieldWithLabel>
      <FieldWithLabel iconName="earth" label="blocks.pa-details.website">
        <FormikInput
          ref={webRef}
          autoCapitalize="none"
          textContentType="URL"
          keyboardType="url"
          returnKeyType="next"
          name={`${blockName}.website`}
          style={styles.input}
          placeholder={translate("blocks.pa-details.websitePlaceholder")}
        />
      </FieldWithLabel>
    </Panel>
  )
}
