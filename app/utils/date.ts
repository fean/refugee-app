import formatDateEx from "date-fns/format"
import formatDistanceEx from "date-fns/formatDistance"

import { dateLocale } from "../i18n"

export const formatDate: typeof formatDateEx = (date, format, options): string =>
  formatDateEx(date, format, { ...options, locale: dateLocale })

export const formatDistance: typeof formatDistanceEx = (date, baseDate, options) =>
  formatDistanceEx(date, baseDate, { ...options, locale: dateLocale })

export const objectIdToDate = (objectId: string): Date => {
  return new Date(parseInt(objectId.substring(0, 8), 16) * 1000)
}
