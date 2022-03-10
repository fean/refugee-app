import * as React from "react"
import { TextStyle, StyleProp, TextInput } from "react-native"
import { useField } from "formik"

import { OTPInput } from "./OTPInput"

interface FormikInputFieldProps {
  style?: StyleProp<TextStyle>
  nextRef?: React.RefObject<TextInput>
  disabled?: boolean
  placeholder?: string
  name: string
}

export const FormikOTPInput: React.FC<FormikInputFieldProps> = ({ style, name, disabled }) => {
  const [{ value }, , helpers] = useField(name)

  return <OTPInput disabled={disabled} style={style} value={value} onChange={helpers.setValue} />
}
