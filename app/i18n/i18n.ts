import * as Localization from "expo-localization"
import i18n from "i18n-js"

import * as locales from "date-fns/locale"

import translations from "./translations"

i18n.fallbacks = true
i18n.translations = translations

i18n.locale = Localization.locale || "en"

const simpleLocale = i18n.locale.includes("-") ? i18n.locale.split("-")[0] : i18n.locale
export const dateLocale = locales[simpleLocale] ?? locales.enGB

/**
 * Builds up valid keypaths for translations.
 * Update to your default locale of choice if not English.
 */
type DefaultLocale = typeof translations.en
export type TxKeyPath = RecursiveKeyOf<DefaultLocale>

type RecursiveKeyOf<TObj extends Record<string, any>> = {
  [TKey in keyof TObj & string]: TObj[TKey] extends Record<string, any>
    ? `${TKey}` | `${TKey}.${RecursiveKeyOf<TObj[TKey]>}`
    : `${TKey}`
}[keyof TObj & string]
