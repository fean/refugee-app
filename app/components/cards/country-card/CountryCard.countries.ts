export interface CountryDetails {
  code: string
  flag: string
  phone: string
}

export const countries: { [key: string]: CountryDetails } = {
  AL: {
    code: "AL",
    flag: "albania",
    phone: "+355",
  },
  AD: {
    code: "AD",
    flag: "andorra",
    phone: "+376",
  },
  AT: {
    code: "AT",
    flag: "austria",
    phone: "+43",
  },
  BY: {
    code: "BY",
    flag: "belarus",
    phone: "+375",
  },
  BE: {
    code: "BE",
    flag: "belgium",
    phone: "+32",
  },
  BA: {
    code: "BA",
    flag: "bosnia",
    phone: "+387",
  },
  BG: {
    code: "BG",
    flag: "bulgaria",
    phone: "+359",
  },
  HR: {
    code: "HR",
    flag: "croatia",
    phone: "+385",
  },
  CZ: {
    code: "CZ",
    flag: "czech",
    phone: "+420",
  },
  DK: {
    code: "DK",
    flag: "denmark",
    phone: "+45",
  },
  EE: {
    code: "EE",
    flag: "estonia",
    phone: "+372",
  },
  FI: {
    code: "FI",
    flag: "finland",
    phone: "+358",
  },
  FR: {
    code: "FR",
    flag: "france",
    phone: "+33",
  },
  DE: {
    code: "DE",
    flag: "germany",
    phone: "+49",
  },
  GR: {
    code: "GR",
    flag: "greece",
    phone: "+30",
  },
  HU: {
    code: "HU",
    flag: "hungary",
    phone: "+36",
  },
  IS: {
    code: "IS",
    flag: "iceland",
    phone: "+354",
  },
  IE: {
    code: "IE",
    flag: "ireland",
    phone: "+353",
  },
  IT: {
    code: "IT",
    flag: "italy",
    phone: "+39",
  },
  LV: {
    code: "LV",
    flag: "latvia",
    phone: "+371",
  },
  LI: {
    code: "LI",
    flag: "liechtenstein",
    phone: "+423",
  },
  LT: {
    code: "LT",
    flag: "lithuania",
    phone: "+370",
  },
  LU: {
    code: "LU",
    flag: "luxembourg",
    phone: "+352",
  },
  MT: {
    code: "MT",
    flag: "malta",
    phone: "+356",
  },
  MD: {
    code: "MD",
    flag: "moldova",
    phone: "+373",
  },
  MC: {
    code: "MC",
    flag: "monaco",
    phone: "+377",
  },
  ME: {
    code: "ME",
    flag: "montenegro",
    phone: "+382",
  },
  NL: {
    code: "NL",
    flag: "netherlands",
    phone: "+31",
  },
  MK: {
    code: "MK",
    flag: "macedonia",
    phone: "+389",
  },
  NO: {
    code: "NO",
    flag: "norway",
    phone: "+47",
  },
  PL: {
    code: "PL",
    flag: "poland",
    phone: "+48",
  },
  PT: {
    code: "PT",
    flag: "portugal",
    phone: "+351",
  },
  RO: {
    code: "RO",
    flag: "romania",
    phone: "+40",
  },
  RU: {
    code: "RU",
    flag: "russia",
    phone: "+7",
  },
  RS: {
    code: "RS",
    flag: "serbia",
    phone: "+381",
  },
  SK: {
    code: "SK",
    flag: "slovakia",
    phone: "+421",
  },
  SI: {
    code: "SI",
    flag: "slovenia",
    phone: "+386",
  },
  ES: {
    code: "ES",
    flag: "spain",
    phone: "+31",
  },
  SE: {
    code: "SE",
    flag: "sweden",
    phone: "+34",
  },
  CH: {
    code: "CH",
    flag: "switzerland",
    phone: "+41",
  },
  UA: {
    code: "UA",
    flag: "ukraine",
    phone: "+380",
  },
  UK: {
    code: "UK",
    flag: "uk",
    phone: "+44",
  },
}

export const supportedCountries = Object.keys(countries)
