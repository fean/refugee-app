import * as React from "react"
import { TextStyle, StyleProp, TextInputProps, TextInput } from "react-native"
import { useField } from "formik"

import { TextArea } from "./TextArea"

interface FormikInputFieldProps {
  style?: StyleProp<TextStyle>
  nextRef?: React.RefObject<TextInput>
  autoComplete?: TextInputProps["autoComplete"]
  textContentType?: TextInputProps["textContentType"]
  keyboardType?: TextInputProps["keyboardType"]
  returnKeyType?: TextInputProps["returnKeyType"]
  maxCharacters?: number
  placeholder?: string
  name: string
}

export const FormikTextArea = React.forwardRef<TextInput, FormikInputFieldProps>(
  (
    {
      style,
      nextRef,
      autoComplete,
      textContentType,
      keyboardType,
      returnKeyType,
      maxCharacters,
      placeholder,
      name,
    },
    ref,
  ) => {
    const [{ value }, , helpers] = useField(name)

    return (
      <TextArea
        ref={ref}
        nextRef={nextRef}
        style={style}
        autoComplete={autoComplete}
        textContentType={textContentType}
        keyboardType={keyboardType}
        returnKeyType={returnKeyType}
        placeholder={placeholder}
        maxCharacters={maxCharacters}
        value={value}
        onChange={helpers.setValue}
      />
    )
  },
)
