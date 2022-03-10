import * as React from "react"
import { View, StyleProp, ViewStyle, StyleSheet, TextInput } from "react-native"
import { color } from "../../../theme"

interface OTPInputProps {
  style?: StyleProp<ViewStyle>
  disabled?: boolean
  value: string
  onChange?: (otp: string) => void
}

const styles = StyleSheet.create({
  bar: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  input: {
    backgroundColor: color.palette.control,
    borderRadius: 5,
    fontSize: 28,
    minHeight: 48,
    minWidth: 48,
    textAlign: "center",
  },
})

const otpTokenLength = 6

export const OTPInput: React.FC<OTPInputProps> = ({
  style: styleOverride,
  disabled,
  value,
  onChange,
}) => {
  const { current: refs } = React.useRef<TextInput[]>([])

  const refNodeHandlers = React.useMemo(() => {
    const handleNode = (index: number) => (node: TextInput) => {
      refs[index] = node
    }

    return Array.from({ length: otpTokenLength }).map((_, index) => handleNode(index))
  }, [])

  const changeHandlers = React.useMemo(() => {
    const handleChange = (index: number) => (letter: string) => {
      onChange(value.substring(0, index) + letter + value.substring(index + 1))

      const canMoveForward = !!letter && index !== 5 && refs[index + 1]
      const canMoveBackward = !letter && index !== 0 && refs[0]
      if (canMoveForward) {
        refs[index + 1].focus()
      } else if (canMoveBackward) {
        refs[index - 1].focus()
      }
    }

    return Array.from({ length: otpTokenLength }).map((_, index) => handleChange(index))
  }, [value])

  return (
    <View style={[styles.bar, styleOverride]}>
      {refNodeHandlers.map((handler, index) => (
        <TextInput
          autoFocus={index === 0}
          key={index}
          editable={!disabled}
          ref={refNodeHandlers[index]}
          value={value.length > index && value[index]}
          style={styles.input}
          keyboardType="numeric"
          maxLength={1}
          onChangeText={changeHandlers[index]}
        />
      ))}
    </View>
  )
}
