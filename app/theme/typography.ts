import { Platform, TextStyle } from "react-native"

/**
 * You can find a list of available fonts on both iOS and Android here:
 * https://github.com/react-native-training/react-native-fonts
 *
 * If you're interested in adding a custom font to your project,
 * check out the readme file in ./assets/fonts/ then come back here
 * and enter your new font name. Remember the Android font name
 * is probably different than iOS.
 * More on that here:
 * https://github.com/lendup/react-native-cross-platform-text
 *
 * The various styles of fonts are defined in the <Text /> component.
 */

const fontFamily = Platform.select({ ios: "System", android: "normal" })

export const typography = {
  /**
   * The primary font.  Used in most places.
   */
  primary: Platform.select({ ios: "System", android: "normal" }),

  /**
   * An alternate font used for perhaps titles and stuff.
   */
  secondary: Platform.select({ ios: "Arial", android: "sans-serif" }),

  /**
   * Lets get fancy with a monospace font!
   */
  code: Platform.select({ ios: "Courier", android: "monospace" }),

  title: {
    fontFamily,
    fontSize: 18,
    fontWeight: "500",
  } as TextStyle,

  header: {
    fontFamily,
    fontSize: 16,
    fontWeight: "500",
  } as TextStyle,

  button: {
    fontFamily,
    fontSize: 15,
  } as TextStyle,

  subheader: {
    fontFamily,
    fontSize: 14,
    fontWeight: "500",
  } as TextStyle,

  text: {
    fontFamily,
    fontSize: 14,
    fontWeight: "normal",
  } as TextStyle,

  chip: {
    fontFamily,
    fontSize: 10,
    fontWeight: "normal",
  } as TextStyle,
}
