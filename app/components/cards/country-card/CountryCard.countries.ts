export interface CountryDetails {
  code: string
  flag: string
  phone: string
}

export const countries: { [key: string]: CountryDetails } = {
  al: {
    code: "al",
    flag: "🇦🇱",
    phone: "+355",
  },
  ad: {
    code: "ad",
    flag: "🇦🇩",
    phone: "+376",
  },
  at: {
    code: "at",
    flag: "🇦🇹",
    phone: "+43",
  },
  by: {
    code: "by",
    flag: "🇧🇾",
    phone: "+375",
  },
  be: {
    code: "be",
    flag: "🇧🇪",
    phone: "+32",
  },
  ba: {
    code: "ba",
    flag: "🇧🇦",
    phone: "+387",
  },
  bg: {
    code: "bg",
    flag: "🇧🇬",
    phone: "+359",
  },
  hr: {
    code: "hr",
    flag: "🇭🇷",
    phone: "+385",
  },
  cz: {
    code: "cz",
    flag: "🇨🇿",
    phone: "+420",
  },
  dk: {
    code: "dk",
    flag: "🇩🇰",
    phone: "+45",
  },
  ee: {
    code: "ee",
    flag: "🇪🇪",
    phone: "+372",
  },
  fi: {
    code: "fi",
    flag: "🇫🇮",
    phone: "+358",
  },
  fr: {
    code: "fr",
    flag: "🇫🇷",
    phone: "+33",
  },
  de: {
    code: "de",
    flag: "🇩🇪",
    phone: "+49",
  },
  gr: {
    code: "gr",
    flag: "🇬🇷",
    phone: "+30",
  },
  hu: {
    code: "hu",
    flag: "🇭🇺",
    phone: "+36",
  },
  is: {
    code: "is",
    flag: "🇮🇸",
    phone: "+354",
  },
  ie: {
    code: "ie",
    flag: "🇮🇪",
    phone: "+353",
  },
  it: {
    code: "it",
    flag: "🇮🇹",
    phone: "+39",
  },
  lv: {
    code: "lv",
    flag: "🇱🇻",
    phone: "+371",
  },
  li: {
    code: "li",
    flag: "🇱🇮",
    phone: "+423",
  },
  lt: {
    code: "lt",
    flag: "🇱🇹",
    phone: "+370",
  },
  lu: {
    code: "lu",
    flag: "🇱🇺",
    phone: "+352",
  },
  mt: {
    code: "mt",
    flag: "🇲🇹",
    phone: "+356",
  },
  md: {
    code: "md",
    flag: "🇲🇩",
    phone: "+373",
  },
  mc: {
    code: "mc",
    flag: "🇲🇨",
    phone: "+377",
  },
  me: {
    code: "me",
    flag: "🇲🇪",
    phone: "+382",
  },
  nl: {
    code: "nl",
    flag: "🇳🇱",
    phone: "+31",
  },
  mk: {
    code: "mk",
    flag: "🇲🇰",
    phone: "+389",
  },
  no: {
    code: "no",
    flag: "🇳🇴",
    phone: "+47",
  },
  pl: {
    code: "pl",
    flag: "🇵🇱",
    phone: "+48",
  },
  pt: {
    code: "pt",
    flag: "🇵🇹",
    phone: "+351",
  },
  ro: {
    code: "ro",
    flag: "🇷🇴",
    phone: "+40",
  },
  ru: {
    code: "ru",
    flag: "🇷🇺",
    phone: "+7",
  },
  sm: {
    code: "sm",
    flag: "🇸🇲",
    phone: "+378",
  },
  rs: {
    code: "rs",
    flag: "🇷🇸",
    phone: "+381",
  },
  sk: {
    code: "sk",
    flag: "🇸🇰",
    phone: "+421",
  },
  si: {
    code: "si",
    flag: "🇸🇮",
    phone: "+386",
  },
  es: {
    code: "es",
    flag: "🇪🇸",
    phone: "+31",
  },
  se: {
    code: "se",
    flag: "🇸🇪",
    phone: "+34",
  },
  ch: {
    code: "ch",
    flag: "🇨🇭",
    phone: "+41",
  },
  tu: {
    code: "tu",
    flag: "🇹🇷",
    phone: "+90",
  },
  ua: {
    code: "ua",
    flag: "🇺🇦",
    phone: "+380",
  },
  uk: {
    code: "uk",
    flag: "🇬🇧",
    phone: "+44",
  },
}

export const supportedCountries = Object.keys(countries)
