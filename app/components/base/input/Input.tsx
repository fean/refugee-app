import * as React from "react"
import {
  StyleProp,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextStyle,
  StyleSheet,
} from "react-native"
import { color } from "../../../theme"

interface InputProps {
  style?: StyleProp<TextStyle>
  placeholder?: string
  value?: string
  onChange?: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void
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

export const Input: React.FC<InputProps> = ({ style, value, placeholder, onChange }) => {
  const [isActive, setActive] = React.useState(false)

  const handleToggleFocus = React.useCallback(() => {
    setActive((lastActive) => !lastActive)
  }, [])

  return (
    <TextInput
      style={[styles.input, isActive && styles.active, style]}
      value={value}
      placeholder={placeholder}
      placeholderTextColor={color.palette.placeholder}
      onChange={onChange}
      onFocus={handleToggleFocus}
      onBlur={handleToggleFocus}
    />
  )
}
