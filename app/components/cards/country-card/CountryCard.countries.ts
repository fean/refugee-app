export interface CountryDetails {
  code: string
  flag: string
  phone: string
}

export const countries: { [key: string]: CountryDetails } = {
  al: {
    code: "al",
    flag: "albania",
    phone: "+355",
  },
  ad: {
    code: "ad",
    flag: "andorra",
    phone: "+376",
  },
  at: {
    code: "at",
    flag: "austria",
    phone: "+43",
  },
  by: {
    code: "by",
    flag: "belarus",
    phone: "+375",
  },
  be: {
    code: "be",
    flag: "belgium",
    phone: "+32",
  },
  ba: {
    code: "ba",
    flag: "bosnia",
    phone: "+387",
  },
  bg: {
    code: "bg",
    flag: "bulgaria",
    phone: "+359",
  },
  hr: {
    code: "hr",
    flag: "croatia",
    phone: "+385",
  },
  cz: {
    code: "cz",
    flag: "czech",
    phone: "+420",
  },
  dk: {
    code: "dk",
    flag: "denmark",
    phone: "+45",
  },
  ee: {
    code: "ee",
    flag: "estonia",
    phone: "+372",
  },
  fi: {
    code: "fi",
    flag: "finland",
    phone: "+358",
  },
  fr: {
    code: "fr",
    flag: "france",
    phone: "+33",
  },
  de: {
    code: "de",
    flag: "germany",
    phone: "+49",
  },
  gr: {
    code: "gr",
    flag: "greece",
    phone: "+30",
  },
  hu: {
    code: "hu",
    flag: "hungary",
    phone: "+36",
  },
  is: {
    code: "is",
    flag: "iceland",
    phone: "+354",
  },
  ie: {
    code: "ie",
    flag: "ireland",
    phone: "+353",
  },
  it: {
    code: "it",
    flag: "italy",
    phone: "+39",
  },
  lv: {
    code: "lv",
    flag: "latvia",
    phone: "+371",
  },
  li: {
    code: "li",
    flag: "liechtenstein",
    phone: "+423",
  },
  lt: {
    code: "lt",
    flag: "lithuania",
    phone: "+370",
  },
  lu: {
    code: "lu",
    flag: "luxembourg",
    phone: "+352",
  },
  mt: {
    code: "mt",
    flag: "malta",
    phone: "+356",
  },
  md: {
    code: "md",
    flag: "moldova",
    phone: "+373",
  },
  mc: {
    code: "mc",
    flag: "monaco",
    phone: "+377",
  },
  me: {
    code: "me",
    flag: "montenegro",
    phone: "+382",
  },
  nl: {
    code: "nl",
    flag: "netherlands",
    phone: "+31",
  },
  mk: {
    code: "mk",
    flag: "macedonia",
    phone: "+389",
  },
  no: {
    code: "no",
    flag: "norway",
    phone: "+47",
  },
  pl: {
    code: "pl",
    flag: "poland",
    phone: "+48",
  },
  pt: {
    code: "pt",
    flag: "portugal",
    phone: "+351",
  },
  ro: {
    code: "ro",
    flag: "romania",
    phone: "+40",
  },
  ru: {
    code: "ru",
    flag: "russia",
    phone: "+7",
  },
  rs: {
    code: "rs",
    flag: "serbia",
    phone: "+381",
  },
  sk: {
    code: "sk",
    flag: "slovakia",
    phone: "+421",
  },
  si: {
    code: "si",
    flag: "slovenia",
    phone: "+386",
  },
  es: {
    code: "es",
    flag: "spain",
    phone: "+31",
  },
  se: {
    code: "se",
    flag: "sweden",
    phone: "+34",
  },
  ch: {
    code: "ch",
    flag: "switzerland",
    phone: "+41",
  },
  ua: {
    code: "ua",
    flag: "ukraine",
    phone: "+380",
  },
  uk: {
    code: "uk",
    flag: "uk",
    phone: "+44",
  },
}

export const supportedCountries = Object.keys(countries)
