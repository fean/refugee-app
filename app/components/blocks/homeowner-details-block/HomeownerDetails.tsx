import * as React from "react"
import { View, StyleProp, ViewStyle, StyleSheet, TextInput } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"

import { color } from "../../../theme"
import { translate } from "../../../i18n"

import { Typography } from "../../base/typography/Typography"
import { Panel } from "../../base/panel"
import { FormikInput } from "../../base/input/formik"
import { FormikCountrySelector } from "../../inputs/country-selector/formik"

interface HomeownerDetailsProps {
  style?: StyleProp<ViewStyle>
  blockName?: string
}

const styles = StyleSheet.create({
  containerInputs: {
    flex: 1,
    flexDirection: "column",
  },
  containerLabels: {
    flexDirection: "column",
  },
  inputNLabelSpacing: {},
  label: {
    alignItems: "center",
    flexDirection: "row",
    height: 32,
  },
  labelText: {
    marginLeft: 16,
    marginRight: 16,
  },
  bar: {
    flexDirection: "row",
    padding: 16,
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
      <View style={styles.containerLabels}>
        <View style={[styles.label, styles.inputNLabelSpacing]}>
          <Icon name="person" size={16} color={color.palette.textShade} />
          <Typography variant="text" color="text" style={styles.labelText}>
            {translate("blocks.ho-details.fullName")}
          </Typography>
        </View>
        <View style={[styles.label, styles.inputNLabelSpacing]}>
          <Icon name="mail" size={16} color={color.palette.textShade} />
          <Typography variant="text" color="text" style={styles.labelText}>
            {translate("blocks.ho-details.email")}
          </Typography>
        </View>
        <View style={[styles.label, styles.inputNLabelSpacing]}>
          <Icon name="flag" size={16} color={color.palette.textShade} />
          <Typography variant="text" color="text" style={styles.labelText}>
            {translate("blocks.ho-details.country")}
          </Typography>
        </View>
        <View style={styles.label}>
          <Icon name="call" size={16} color={color.palette.textShade} />
          <Typography variant="text" color="text" style={styles.labelText}>
            {translate("blocks.ho-details.phone")}
          </Typography>
        </View>
      </View>

      <View style={styles.containerInputs}>
        <FormikInput
          nextRef={emailRef}
          textContentType="name"
          returnKeyType="next"
          name={`${blockName}.fullName`}
          style={styles.inputNLabelSpacing}
          placeholder={translate("blocks.ho-details.fullNamePlaceholder")}
        />
        <FormikInput
          ref={emailRef}
          textContentType="emailAddress"
          keyboardType="email-address"
          returnKeyType="next"
          name={`${blockName}.email`}
          style={styles.inputNLabelSpacing}
          placeholder={translate("blocks.ho-details.emailPlaceholder")}
        />
        <FormikCountrySelector
          nextRef={phoneRef}
          name={`${blockName}.country`}
          style={styles.inputNLabelSpacing}
          placeholder={translate("blocks.ho-details.countryPlaceholder")}
        />
        <FormikInput
          ref={phoneRef}
          textContentType="telephoneNumber"
          keyboardType="phone-pad"
          returnKeyType="next"
          name={`${blockName}.phone`}
          placeholder={translate("blocks.ho-details.phonePlaceholder")}
        />
      </View>
    </Panel>
  )
}
