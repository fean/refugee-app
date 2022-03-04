import * as React from "react"
import { View, StyleProp, ViewStyle, StyleSheet } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"

import { color } from "../../../theme"
import { translate } from "../../../i18n"

import { Typography } from "../../base/typography/Typography"
import { Panel } from "../../base/panel"
import { FormikInput } from "../../base/input/formik"
import { FormikValueSelector } from "../../inputs/value-selector/formik"
import { Value } from "../../inputs/value-selector/ValueSelector"

interface HomeownerDetailsProps {
  style?: StyleProp<ViewStyle>
  blockName?: string
}

const styles = StyleSheet.create({
  containerLabels: {
    alignItems: "center",
    flexDirection: "row",
    height: 32,
  },
  input: {
    flex: 1,
  },
  labelText: {
    marginLeft: 16,
    marginRight: 16,
  },
  panel: {
    flexDirection: "column",
    padding: 16,
  },
  typeLabelText: {
    marginRight: 24,
  },
  warning: {
    backgroundColor: color.palette.control,
    borderBottomWidth: 1,
    borderColor: color.palette.europeShade,
    borderTopWidth: 1,
    flex: 1,
    marginBottom: 8,
    marginLeft: -16,
    marginRight: -16,
    marginTop: 8,
    padding: 8,
  },
})

const typeValues: Value[] = [
  { value: "Owned", label: translate("blocks.ho-space.owned") },
  { value: "Leased", label: translate("blocks.ho-space.leased") },
]

export const HomeownerPlace: React.FC<HomeownerDetailsProps> = ({
  style: styleOverride,
  blockName,
}) => (
  <Panel style={[styles.panel, styleOverride]}>
    <View style={styles.containerLabels}>
      <Icon name="reader" size={16} color={color.palette.textShade} />
      <Typography variant="text" color="text" style={[styles.labelText, styles.typeLabelText]}>
        {translate("blocks.ho-space.type")}
      </Typography>

      <FormikValueSelector name={`${blockName}.type`} values={typeValues} />
    </View>

    <View style={styles.warning}>
      <Typography variant="text" color="shade">
        {translate("blocks.ho-space.leaseWarning")}
      </Typography>
    </View>

    <View style={styles.containerLabels}>
      <Icon name="reader" size={16} color={color.palette.textShade} />
      <Typography variant="text" color="text" style={styles.labelText}>
        {translate("blocks.ho-space.beds")}
      </Typography>

      <FormikInput
        style={styles.input}
        textContentType="oneTimeCode"
        name={`${blockName}.beds`}
        placeholder={translate("blocks.ho-space.bedsPlaceholder")}
      />
    </View>
  </Panel>
)
