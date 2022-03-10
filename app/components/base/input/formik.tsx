import * as React from "react"
import { TextStyle, StyleProp, TextInputProps, TextInput, ViewStyle } from "react-native"
import { useField } from "formik"

import { Input } from "./Input"

interface FormikInputFieldProps {
  style?: StyleProp<ViewStyle>
  inputContainerStyle?: StyleProp<ViewStyle>
  inputStyle?: StyleProp<TextStyle>
  disabled?: boolean
  icon?: string
  error?: string
  nextRef?: React.RefObject<TextInput>
  autoCapitalize?: TextInputProps["autoCapitalize"]
  autoComplete?: TextInputProps["autoComplete"]
  textContentType?: TextInputProps["textContentType"]
  keyboardType?: TextInputProps["keyboardType"]
  returnKeyType?: TextInputProps["returnKeyType"]
  placeholder?: string
  name: string
}

export const FormikInput = React.forwardRef<TextInput, FormikInputFieldProps>(
  (
    {
      style,
      inputContainerStyle,
      inputStyle,
      disabled,
      icon,
      error,
      nextRef,
      autoComplete,
      autoCapitalize,
      textContentType,
      keyboardType,
      returnKeyType,
      placeholder,
      name,
    },
    ref,
  ) => {
    const [{ value }, { touched, error: formError }, helpers] = useField(name)

    return (
      <Input
        ref={ref}
        nextRef={nextRef}
        style={style}
        inputContainerStyle={inputContainerStyle}
        inputStyle={inputStyle}
        disabled={disabled}
        icon={icon}
        error={error || (touched && formError)}
        autoCapitalize={autoCapitalize}
        autoComplete={autoComplete}
        textContentType={textContentType}
        keyboardType={keyboardType}
        returnKeyType={returnKeyType}
        placeholder={placeholder}
        value={value}
        onChange={helpers.setValue}
      />
    )
  },
)
