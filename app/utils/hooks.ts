import * as React from "react"

export const useDebounce = <TValue>(value: TValue, delay: number): TValue => {
  const [debouncedValue, setDebouncedValue] = React.useState(value)

  React.useEffect(() => {
    // Update debounced value after delay
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])
  return debouncedValue
}
