export interface CountryDetails {
  code: string
  flag: string
  phone: string
}

export const countries: { [key: string]: CountryDetails } = {
  nl: {
    code: "nl",
    flag: "🇳🇱",
    phone: "+31",
  },
  de: {
    code: "de",
    flag: "🇩🇪",
    phone: "+49",
  },
}
