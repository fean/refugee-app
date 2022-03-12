import * as React from "react"
import {
  View,
  StyleProp,
  ViewStyle,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
  TouchableHighlight,
} from "react-native"

import { translate } from "../../../i18n"

import { Typography } from "../../base/typography/Typography"
import { Panel } from "../../base/panel"

import { countries, CountryDetails } from "./CountryCard.countries"
import * as theme from "../../../theme"

interface PanelProps {
  style?: StyleProp<ViewStyle>
  country: keyof typeof countries
  onPress: (selection: CountryDetails) => void
}

const styles = StyleSheet.create({
  bar: {
    alignItems: "center",
    flexDirection: "row",
    height: 48,
    justifyContent: "space-between",
    paddingLeft: 8,
    paddingRight: 8,
  },
  flag: {
    height: 32,
    width: 32,
  },
  title: {
    marginLeft: 16,
  },
  titleFlagContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  touchable: {
    borderRadius: theme.borderRadius.big,
  },
})

const Touchable = Platform.select({
  ios: TouchableOpacity,
  android: ((props) => (
    <TouchableHighlight activeOpacity={0.7} underlayColor={theme.color.palette.white} {...props} />
  )) as any,
})

export const CountryCard: React.FC<PanelProps> = ({
  style: styleOverride,
  country: code,
  onPress,
}) => {
  const { [code]: country } = countries

  const handlePress = React.useCallback(() => onPress(country), [country, onPress])

  return (
    <Touchable styles={styles.touchable} onPress={handlePress}>
      <Panel style={[styles.bar, styleOverride]}>
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
    </Touchable>
  )
}
