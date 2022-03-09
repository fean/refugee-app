import * as React from "react"
import { View, StyleSheet } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"

import { Typography } from "../../base/typography/Typography"
import { color } from "../../../theme"
import { translate } from "../../../i18n"

interface FieldWithLabelProps {
  iconName?: string
  label: string
}

const styles = StyleSheet.create({
  field: {
    alignItems: "center",
    flexDirection: "row",
    height: 40,
  },
  label: {
    flexDirection: "row",
    width: 100,
  },
  labelText: {
    marginLeft: 16,
    marginRight: 16,
  },
  spacer: {
    width: 16,
  },
})

export const FieldWithLabel: React.FC<FieldWithLabelProps> = ({ children, iconName, label }) => (
  <View style={styles.field}>
    <View style={styles.label}>
      {iconName ? (
        <Icon name={iconName} size={16} color={color.palette.textShade} />
      ) : (
        <View style={styles.spacer} />
      )}
      <Typography variant="text" color="text" style={styles.labelText}>
        {translate(label)}
      </Typography>
    </View>
    {children}
  </View>
)
