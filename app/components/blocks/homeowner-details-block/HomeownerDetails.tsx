import * as React from "react"
import { StyleProp, ViewStyle, StyleSheet, TextInput } from "react-native"

import { translate } from "../../../i18n"

import { Panel } from "../../base/panel"
import { FormikInput } from "../../base/input/formik"
import { FormikCountrySelector } from "../../inputs/country-selector/formik"
import { FieldWithLabel } from "../../inputs/field-with-label"

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

export const HomeownerDetails: React.FC<HomeownerDetailsProps> = ({
  style: styleOverride,
  blockName,
}) => {
  const emailRef = React.createRef<TextInput>()
  const phoneRef = React.createRef<TextInput>()

  return (
    <Panel style={[styles.bar, styleOverride]}>
      <FieldWithLabel iconName="person" label="blocks.ho-details.fullName">
        <FormikInput
          nextRef={emailRef}
          textContentType="name"
          returnKeyType="next"
          name={`${blockName}.fullName`}
          placeholder={translate("blocks.ho-details.fullNamePlaceholder")}
          style={styles.input}
        />
      </FieldWithLabel>
      <FieldWithLabel iconName="mail" label="blocks.ho-details.email">
        <FormikInput
          ref={emailRef}
          textContentType="emailAddress"
          keyboardType="email-address"
          returnKeyType="next"
          name={`${blockName}.email`}
          placeholder={translate("blocks.ho-details.emailPlaceholder")}
          style={styles.input}
        />
      </FieldWithLabel>
      <FieldWithLabel iconName="flag" label="blocks.ho-details.country">
        <FormikCountrySelector
          nextRef={phoneRef}
          name={`${blockName}.country`}
          placeholder={translate("blocks.ho-details.countryPlaceholder")}
          style={styles.input}
        />
      </FieldWithLabel>
      <FieldWithLabel iconName="call" label="blocks.ho-details.phone">
        <FormikInput
          ref={phoneRef}
          textContentType="telephoneNumber"
          keyboardType="phone-pad"
          returnKeyType="next"
          name={`${blockName}.phone`}
          placeholder={translate("blocks.ho-details.phonePlaceholder")}
          style={styles.input}
        />
      </FieldWithLabel>
    </Panel>
  )
}
