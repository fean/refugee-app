import * as React from "react"
import { TextStyle, StyleProp, TextInputProps, TextInput } from "react-native"
import { useField } from "formik"

import { Input } from "./Input"

interface FormikInputFieldProps {
  style?: StyleProp<TextStyle>
  nextRef?: React.RefObject<TextInput>
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
      nextRef,
      autoComplete,
      textContentType,
      keyboardType,
      returnKeyType,
      placeholder,
      name,
    },
    ref,
  ) => {
    const [{ value }, , helpers] = useField(name)

    return (
      <Input
        ref={ref}
        nextRef={nextRef}
        style={style}
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
