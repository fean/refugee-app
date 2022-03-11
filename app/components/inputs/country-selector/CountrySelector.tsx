import * as React from "react"
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  TouchableNativeFeedback,
  View,
  TextInput,
  Image,
} from "react-native"
import Icon from "react-native-vector-icons/Ionicons"

import { translate } from "../../../i18n"
import { borderRadius, color } from "../../../theme"

import { Typography } from "../../base/typography/Typography"
import { countries, CountryDetails } from "../../cards/country-card/CountryCard.countries"
import { CountryModal } from "../../modals/country-select-modal/CountryModal"

interface CountrySelectorProps {
  style?: StyleProp<ViewStyle>
  nextRef?: React.RefObject<TextInput>
  placeholder?: string
  value?: keyof typeof countries
  onChange?: (code: string) => void
}

const styles = StyleSheet.create({
  active: {
    backgroundColor: color.palette.control,
  },
  flag: {
    height: 20,
    marginRight: 8,
    width: 20,
  },
  icon: {
    marginLeft: 8,
  },
  inner: {
    alignItems: "center",
    borderRadius: borderRadius.small,
    flexDirection: "row",
    height: 32,
    justifyContent: "space-between",
    paddingLeft: 8,
    paddingRight: 8,
  },
  valueContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
})

export const CountrySelector: React.FC<CountrySelectorProps> = ({
  style: styleOverride,
  nextRef,
  placeholder,
  value,
  onChange,
}) => {
  const [isOpen, setOpen] = React.useState(false)

  const handleOpen = React.useCallback(() => setOpen(true), [])

  const handleClose = React.useCallback(
    (event: CountryDetails | null) => {
      setOpen(false)

      if (event && onChange) {
        nextRef?.current?.focus()
        onChange(event.code)
      }
    },
    [onChange],
  )

  const country = value && countries[value]

  return (
    <>
      <TouchableNativeFeedback onPress={handleOpen}>
        <View style={[styles.inner, isOpen && styles.active, styleOverride]}>
          <View style={styles.valueContainer}>
            {country?.flag && <Image style={styles.flag} source={{ uri: country.flag }} />}
            <Typography
              variant="text"
              color={country ? "text" : "placeholder"}
              ellipsizeMode="tail"
              numberOfLines={1}
            >
              {country ? translate(`countries.${country.code}`) : placeholder}
            </Typography>
          </View>

          <Icon
            style={styles.icon}
            name={isOpen ? "chevron-up" : "chevron-down"}
            size={16}
            color={color.palette.textShade}
          />
        </View>
      </TouchableNativeFeedback>

      <CountryModal open={isOpen} onClose={handleClose} />
    </>
  )
}
