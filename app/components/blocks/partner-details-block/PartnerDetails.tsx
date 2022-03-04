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
  panel: {
    flexDirection: "row",
    padding: 16,
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
    <Panel style={[styles.panel, styleOverride]}>
      <View style={styles.containerLabels}>
        <View style={[styles.label, styles.inputNLabelSpacing]}>
          <Icon name="person" size={16} color={color.palette.textShade} />
          <Typography variant="text" color="text" style={styles.labelText}>
            {translate("blocks.pa-details.contact")}
          </Typography>
        </View>
        <View style={[styles.label, styles.inputNLabelSpacing]}>
          <Icon name="business" size={16} color={color.palette.textShade} />
          <Typography variant="text" color="text" style={styles.labelText}>
            {translate("blocks.pa-details.orgName")}
          </Typography>
        </View>
        <View style={[styles.label, styles.inputNLabelSpacing]}>
          <Icon name="mail" size={16} color={color.palette.textShade} />
          <Typography variant="text" color="text" style={styles.labelText}>
            {translate("blocks.pa-details.email")}
          </Typography>
        </View>
        <View style={styles.label}>
          <Icon name="flag" size={16} color={color.palette.textShade} />
          <Typography variant="text" color="text" style={styles.labelText}>
            {translate("blocks.pa-details.country")}
          </Typography>
        </View>
        <View style={styles.label}>
          <Icon name="call" size={16} color={color.palette.textShade} />
          <Typography variant="text" color="text" style={styles.labelText}>
            {translate("blocks.pa-details.phone")}
          </Typography>
        </View>
        <View style={styles.label}>
          <Icon name="earth" size={16} color={color.palette.textShade} />
          <Typography variant="text" color="text" style={styles.labelText}>
            {translate("blocks.pa-details.website")}
          </Typography>
        </View>
      </View>

      <View style={styles.containerInputs}>
        <FormikInput
          nextRef={nameRef}
          textContentType="name"
          returnKeyType="next"
          name={`${blockName}.contactName`}
          style={styles.inputNLabelSpacing}
          placeholder={translate("blocks.pa-details.contactPlaceholder")}
        />
        <FormikInput
          ref={nameRef}
          returnKeyType="next"
          name={`${blockName}.orgName`}
          style={styles.inputNLabelSpacing}
          placeholder={translate("blocks.pa-details.orgNamePlaceholder")}
        />
        <FormikInput
          ref={emailRef}
          textContentType="emailAddress"
          returnKeyType="next"
          name={`${blockName}.email`}
          placeholder={translate("blocks.pa-details.emailPlaceholder")}
        />
        <FormikCountrySelector
          nextRef={phoneRef}
          name={`${blockName}.country`}
          style={styles.inputNLabelSpacing}
          placeholder={translate("blocks.pa-details.countryPlaceholder")}
        />
        <FormikInput
          ref={phoneRef}
          nextRef={webRef}
          textContentType="telephoneNumber"
          returnKeyType="next"
          name={`${blockName}.phone`}
          placeholder={translate("blocks.pa-details.phonePlaceholder")}
        />
        <FormikInput
          ref={webRef}
          textContentType="telephoneNumber"
          returnKeyType="next"
          name={`${blockName}.phone`}
          placeholder={translate("blocks.pa-details.websitePlaceholder")}
        />
      </View>
    </Panel>
  )
}
