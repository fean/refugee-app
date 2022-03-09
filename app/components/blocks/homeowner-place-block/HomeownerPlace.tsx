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
  <Panel style={[styles.bar, styleOverride]}>
    <FieldWithLabel iconName="reader" label="blocks.ho-space.type">
      <FormikValueSelector name={`${blockName}.type`} values={typeValues} />
    </FieldWithLabel>

    <View style={styles.warning}>
      <Typography variant="text" color="shade">
        {translate("blocks.ho-space.leaseWarning")}
      </Typography>
    </View>

    <FieldWithLabel iconName="bed" label="blocks.ho-space.beds">
      <FormikInput
        style={styles.input}
        keyboardType="numeric"
        name={`${blockName}.beds`}
        placeholder={translate("blocks.ho-space.bedsPlaceholder")}
      />
    </FieldWithLabel>
  </Panel>
)
