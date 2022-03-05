import * as React from "react"
import { View, StyleProp, ViewStyle, StyleSheet } from "react-native"
import { Number } from "../../base/number/Number"
import { Typography } from "../../base/typography/Typography"

interface NumericHeaderProps {
  style?: StyleProp<ViewStyle>
  option: "1" | "2" | "3" | "4" | "complete"
  title: string
  text: string
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexDirection: "row",
  },
  inner: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 16,
  },
  text: {
    flex: 1,
    marginTop: 2,
  },
})

export const NumericHeader: React.FC<NumericHeaderProps> = ({
  style: styleOverride,
  option,
  title,
  text,
}) => (
  <View style={[styles.scrollContainer, styleOverride]}>
    <Number option={option} />

    <View style={styles.inner}>
      <Typography variant="header" ellipsizeMode="tail" numberOfLines={1}>
        {title}
      </Typography>
      <Typography variant="text" color="shade" style={styles.text}>
        {text}
      </Typography>
    </View>
  </View>
)
