import * as React from "react"
import { View, StyleProp, ViewStyle, StyleSheet, Image, TouchableOpacity } from "react-native"

import { translate } from "../../../i18n"

import { Typography } from "../../base/typography/Typography"
import { Panel } from "../../base/panel"

import { countries, CountryDetails } from "./CountryCard.countries"

interface PanelProps {
  style?: StyleProp<ViewStyle>
  country: keyof typeof countries
  onPress: (selection: CountryDetails) => void
}

const styles = StyleSheet.create({
  flag: {
    height: 32,
    width: 32,
  },
  panel: {
    alignItems: "center",
    flexDirection: "row",
    height: 48,
    justifyContent: "space-between",
    paddingLeft: 8,
    paddingRight: 8,
  },
  title: {
    marginLeft: 16,
  },
  titleFlagContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
})

export const CountryCard: React.FC<PanelProps> = ({
  style: styleOverride,
  country: code,
  onPress,
}) => {
  const { [code]: country } = countries

  const handlePress = React.useCallback(() => onPress(country), [country, onPress])

  return (
    <TouchableOpacity onPress={handlePress}>
      <Panel style={[styles.panel, styleOverride]}>
        <View style={styles.titleFlagContainer}>
          <Image style={styles.flag} source={{ uri: country.flag }} />
          <Typography variant="text" style={styles.title} ellipsizeMode="tail" numberOfLines={1}>
            {translate(`countries.${code}`)}
          </Typography>
        </View>

        <Typography variant="text" color="placeholder">
          {country.phone}
        </Typography>
      </Panel>
    </TouchableOpacity>
  )
}
