import { color } from "./color"

export const shadows = {
  cover: {
    shadowColor: color.palette.black,
    shadowOffset: {
      width: 0,
      height: -8,
    },
    shadowOpacity: 0.12,
    shadowRadius: 48,
    elevation: 8,
  },
  block: {
    shadowColor: color.palette.black,
    shadowOffset: {
      width: 8,
      height: 8,
    },
    shadowOpacity: 0.12,
    shadowRadius: 48,
    elevation: 8,
  },
  input: {
    shadowColor: color.palette.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 0,
  },
  glow: {
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 0,
  },
}
