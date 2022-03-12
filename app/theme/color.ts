import { palette } from "./palette"

export const color = {
  /**
   * The palette is available to use, but prefer using the name.
   */
  palette,
  /**
   * A helper for making something see-thru. Use sparingly as many layers of transparency
   * can cause older Android devices to slow down due to the excessive compositing required
   * by their under-powered GPUs.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The screen background.
   */
  background: palette.white,
  /**
   * The main tinting color.
   */
  primary: palette.europeShade,
  /**
   * The main tinting color, but darker.
   */
  primaryDarker: palette.europe,
  /**
   * A subtle color used for borders and lines.
   */
  line: palette.control,
  /**
   * The default color of text in many components.
   */
  text: palette.text,
  /**
   * Secondary information.
   */
  dim: palette.textShade,
  /**
   * Error messages and icons.
   */
  error: palette.error,

  /**
   * Storybook background for Text stories, or any stories where
   * the text color is color.text, which is white by default, and does not show
   * in Stories against the default white background
   */
  storybookDarkBg: palette.white,

  /**
   * Storybook text color for stories that display Text components against the
   * white background
   */
  storybookTextColor: palette.black,
}
