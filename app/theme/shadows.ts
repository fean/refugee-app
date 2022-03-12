import { Platform } from "react-native"

import { color } from "./color"

export const shadows = {
  cover: {
    shadowColor: color.palette.black,
    shadowOffset: {
      width: 0,
      height: -8,
    },
    shadowOpacity: 0.12,
    shadowRadius: 24,
    elevation: 8,
  },
  block: {
    shadowColor: Platform.select({ ios: color.palette.black, android: "rgba(0,0,0,0.5)" }),
    shadowOffset: {
      width: 8,
      height: 8,
    },
    shadowOpacity: 0.12,
    shadowRadius: 24,
    elevation: 8,
  },
  input: {
    shadowColor: color.palette.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 0,
  },
  glow: {
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    elevation: 0,
  },
}
