import * as React from "react"
import {
  StyleProp,
  TextInput,
  NativeSyntheticEvent,
  TextStyle,
  StyleSheet,
  TextInputFocusEventData,
  TextInputProps,
} from "react-native"
import { color } from "../../../theme"

interface InputProps {
  style?: StyleProp<TextStyle>
  autoComplete?: TextInputProps["autoComplete"]
  textContentType?: TextInputProps["textContentType"]
  keyboardType?: TextInputProps["keyboardType"]
  returnKeyType?: TextInputProps["returnKeyType"]
  nextRef?: React.RefObject<TextInput>
  placeholder?: string
  value?: string
  onFocus?: (event: NativeSyntheticEvent<TextInputFocusEventData>) => void
  onBlur?: (event: NativeSyntheticEvent<TextInputFocusEventData>) => void
  onChange?: (value: string) => void
}

const styles = StyleSheet.create({
  active: {
    backgroundColor: color.palette.control,
  },
  input: {
    borderRadius: 5,
    color: color.palette.text,
    height: 32,
    paddingLeft: 8,
    paddingRight: 8,
  },
})

// eslint-disable-next-line react/display-name
export const Input = React.forwardRef<TextInput, InputProps>(
  (
    {
      style,
      autoComplete,
      textContentType,
      keyboardType,
      returnKeyType,
      nextRef,
      value,
      placeholder,
      onFocus,
      onBlur,
      onChange,
    },
    ref,
  ) => {
    const [isActive, setActive] = React.useState(false)

    const handleFocus = React.useCallback(
      (event) => {
        setActive(true)
        onFocus && onFocus(event)
      },
      [onFocus],
    )

    const handleBlur = React.useCallback(
      (event) => {
        setActive(false)
        onBlur && onBlur(event)
      },
      [onBlur],
    )

    const handleSubmitEditing = React.useCallback(() => {
      if (!nextRef) return
      const { current } = nextRef

      current.focus()
    }, [nextRef])

    return (
      <TextInput
        ref={ref}
        autoComplete={autoComplete}
        textContentType={textContentType}
        keyboardType={keyboardType}
        returnKeyType={returnKeyType}
        style={[styles.input, isActive && styles.active, style]}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={color.palette.placeholder}
        onSubmitEditing={handleSubmitEditing}
        onChangeText={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    )
  },
)
