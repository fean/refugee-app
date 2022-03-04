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
  label: {
    alignItems: "center",
    flexDirection: "row",
    height: 32,
  },
  labelText: {
    marginLeft: 16,
    marginRight: 16,
  },
  noIcon: {
    paddingLeft: 16,
  },
  panel: {
    flexDirection: "row",
    padding: 16,
  },
})

export const HomeownerLocation: React.FC<HomeownerDetailsProps> = ({
  style: styleOverride,
  blockName,
}) => {
  const postalRef = React.createRef<TextInput>()
  const cityRef = React.createRef<TextInput>()

  return (
    <Panel style={[styles.panel, styleOverride]}>
      <View style={styles.containerLabels}>
        <View style={styles.label}>
          <Icon name="home" size={16} color={color.palette.textShade} />
          <Typography variant="text" color="text" style={styles.labelText}>
            {translate("blocks.ho-location.address")}
          </Typography>
        </View>
        <View style={[styles.label, styles.noIcon]}>
          <Typography variant="text" color="text" style={styles.labelText}>
            {translate("blocks.ho-location.postal")}
          </Typography>
        </View>
        <View style={[styles.label, styles.noIcon]}>
          <Typography variant="text" color="text" style={styles.labelText}>
            {translate("blocks.ho-location.city")}
          </Typography>
        </View>
        <View style={styles.label}>
          <Icon name="flag" size={16} color={color.palette.textShade} />
          <Typography variant="text" color="text" style={styles.labelText}>
            {translate("blocks.ho-location.country")}
          </Typography>
        </View>
      </View>

      <View style={styles.containerInputs}>
        <FormikInput
          nextRef={postalRef}
          textContentType="fullStreetAddress"
          returnKeyType="next"
          name={`${blockName}.addressLine`}
          placeholder={translate("blocks.ho-location.addressPlaceholder")}
        />
        <FormikInput
          ref={postalRef}
          nextRef={cityRef}
          textContentType="postalCode"
          returnKeyType="next"
          name={`${blockName}.postal`}
          placeholder={translate("blocks.ho-location.postalPlaceholder")}
        />
        <FormikInput
          ref={cityRef}
          textContentType="addressCity"
          returnKeyType="next"
          name={`${blockName}.phone`}
          placeholder={translate("blocks.ho-location.cityPlaceholder")}
        />
        <FormikCountrySelector
          name={`${blockName}.country`}
          placeholder={translate("blocks.ho-location.countryPlaceholder")}
        />
      </View>
    </Panel>
  )
}
