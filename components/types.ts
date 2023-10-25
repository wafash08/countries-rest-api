type NativeName = Record<string, { official: string; common: string }>;
type Currencies = Record<string, { name: string; symbol: string }>;
type Languages = Record<string, string>;
type Translations = Record<string, { official: string; common: string }>;
type Demonyms = Record<string, { f: string; m: string }>;
type Gini = Record<string, number>;
export type Country = {
  name: {
    common: string;
    official: string;
    nativeName: NativeName;
  };
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: { root: string; suffixes: string[] };
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Languages;
  translations: Translations;
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  gini: Gini;
  fifa: string;
  car: {
    signs: string[];
    side: string;
  };
  timezones: string[];
  continents: string[];
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  coatOfArms: {
    png: string;
    svg: string;
  };
  startOfWeek: "saturday" | "sunday" | "monday";
  capitalInfo: {
    latlng: number[];
  };
  postalCode: {
    format: string;
    regex: string;
  };
};
