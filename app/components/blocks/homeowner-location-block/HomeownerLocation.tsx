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

export const HomeownerLocation: React.FC<HomeownerDetailsProps> = ({
  style: styleOverride,
  blockName,
}) => {
  const postalRef = React.createRef<TextInput>()
  const cityRef = React.createRef<TextInput>()

  return (
    <Panel style={[styles.bar, styleOverride]}>
      <FieldWithLabel iconName="home" label="blocks.ho-location.address">
        <FormikInput
          nextRef={postalRef}
          textContentType="streetAddressLine1"
          returnKeyType="next"
          name={`${blockName}.addressLine`}
          style={styles.input}
          placeholder={translate("blocks.ho-location.addressPlaceholder")}
        />
      </FieldWithLabel>
      <FieldWithLabel label="blocks.ho-location.postal">
        <FormikInput
          ref={postalRef}
          nextRef={cityRef}
          textContentType="postalCode"
          returnKeyType="next"
          name={`${blockName}.postal`}
          style={styles.input}
          placeholder={translate("blocks.ho-location.postalPlaceholder")}
        />
      </FieldWithLabel>
      <FieldWithLabel label="blocks.ho-location.city">
        <FormikInput
          ref={cityRef}
          textContentType="addressCity"
          returnKeyType="next"
          name={`${blockName}.phone`}
          style={styles.input}
          placeholder={translate("blocks.ho-location.cityPlaceholder")}
        />
      </FieldWithLabel>
      <FieldWithLabel iconName="flag" label="blocks.ho-location.country">
        <FormikCountrySelector
          name={`${blockName}.country`}
          style={styles.input}
          placeholder={translate("blocks.ho-location.countryPlaceholder")}
        />
      </FieldWithLabel>
    </Panel>
  )
}
