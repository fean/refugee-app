import * as React from "react"
import { TextStyle, StyleProp, TextInput } from "react-native"
import { useField } from "formik"

import { CountrySelector } from "./CountrySelector"

interface FormikInputFieldProps {
  style?: StyleProp<TextStyle>
  nextRef?: React.RefObject<TextInput>
  placeholder?: string
  name: string
}

export const FormikCountrySelector: React.FC<FormikInputFieldProps> = ({
  style,
  nextRef,
  placeholder,
  name,
}) => {
  const [{ value }, , helpers] = useField(name)

  return (
    <CountrySelector
      style={style}
      nextRef={nextRef}
      placeholder={placeholder}
      value={value}
      onChange={helpers.setValue}
    />
  )
}
