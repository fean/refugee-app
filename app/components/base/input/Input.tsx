import * as React from "react"
import {
  View,
  StyleProp,
  TextInput,
  NativeSyntheticEvent,
  TextStyle,
  StyleSheet,
  TextInputFocusEventData,
  TextInputProps,
} from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import { color } from "../../../theme"

interface InputProps {
  style?: StyleProp<TextStyle>
  inputStyle?: StyleProp<TextStyle>
  disabled?: boolean
  icon?: string
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
  icon: {
    height: 16,
  },
  input: {
    borderRadius: 5,
    color: color.palette.text,
    flexGrow: 1,
    fontSize: 14,
    minHeight: 32,
  },
  inputIcon: {
    marginLeft: 8,
  },
  root: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    paddingLeft: 16,
    paddingRight: 8,
    paddingVertical: 8,
  },
})

// eslint-disable-next-line react/display-name
export const Input = React.forwardRef<TextInput, InputProps>(
  (
    {
      style,
      inputStyle,
      disabled,
      icon,
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
      <View style={[icon && styles.root, style]}>
        {icon && <Icon style={styles.icon} name={icon} size={16} color={color.palette.textShade} />}
        <TextInput
          ref={ref}
          blurOnSubmit
          editable={!disabled}
          autoComplete={autoComplete}
          textContentType={textContentType}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          style={[styles.input, isActive && styles.active, icon && styles.inputIcon, inputStyle]}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={color.palette.placeholder}
          onSubmitEditing={handleSubmitEditing}
          onChangeText={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </View>
    )
  },
)
