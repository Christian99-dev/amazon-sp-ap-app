// prettier-ignore
const marketplaceDataConfig: CountryData[] = [
  // EU
  { countryName: "Spain",           countryCode: "ES", marketplaceId: "A1RKKUPIHCS9HS", region: "eu", active: true },
  { countryName: "United Kingdom",  countryCode: "UK", marketplaceId: "A1F83G8C2ARO7P", region: "eu", active: true },
  { countryName: "France",          countryCode: "FR", marketplaceId: "A13V1IB3VIYZZH", region: "eu", active: true },
  { countryName: "Belgium",         countryCode: "BE", marketplaceId: "AMEN7PMS3EDWL",  region: "eu", active: true },
  { countryName: "Netherlands",     countryCode: "NL", marketplaceId: "A1805IZSGTT6HS", region: "eu", active: true },
  { countryName: "Germany",         countryCode: "DE", marketplaceId: "A1PA6795UKMFR9", region: "eu", active: true },
  { countryName: "Italy",           countryCode: "IT", marketplaceId: "APJ6JRA9NG5V4",  region: "eu", active: true },
  { countryName: "Sweden",          countryCode: "SE", marketplaceId: "A2NODRKZP88ZB9", region: "eu", active: true },
  { countryName: "Poland",          countryCode: "PL", marketplaceId: "A1C3SOZRARQ6R3", region: "eu", active: true },

  // NA
  { countryName: "Canada",          countryCode: "CA", marketplaceId: "A2EUQ1WTGCTBG2", region: "na", active: true },
  { countryName: "USA",             countryCode: "US", marketplaceId: "ATVPDKIKX0DER",  region: "na", active: true },
  { countryName: "Mexico",          countryCode: "MX", marketplaceId: "A1AM78C64UM0Y8", region: "na", active: true },
  { countryName: "Brazil",          countryCode: "BR", marketplaceId: "A2Q3Y263D00KWC", region: "na", active: true },

  // FE
  { countryName: "Singapore",       countryCode: "IT", marketplaceId: "A19VAU5U5O7RUS", region: "fe", active: false },
  { countryName: "Australia",       countryCode: "SE", marketplaceId: "A39IBJ37TRP1C6", region: "fe", active: false },
  { countryName: "Japan",           countryCode: "PL", marketplaceId: "A1VC38T7YXB528", region: "fe", active: false },
];

export const getRegionName = (regionCode: "na" | "eu" | "fe"): string => {
  switch (regionCode) {
    case "eu":
      return "Europa";
    case "fe":
      return "Far East";
    case "na":
      return "North America";
  }
};

// Types
export type CountryData = {
  countryName: string;
  countryCode: string;
  marketplaceId: string;
  region: Region;
  active: boolean;
};

export type Region = "na" | "eu" | "fe";

export type Country =
  | "Canada"
  | "USA"
  | "Mexico"
  | "Brazil"
  | "Spain"
  | "United Kingdom"
  | "France"
  | "Belgium"
  | "Netherlands"
  | "Germany"
  | "Italy"
  | "Sweden"
  | "Poland"
  | "Singapore"
  | "Australia"
  | "Japan";

  export const getAllActiveCountries = (): CountryData[] => {
    return marketplaceDataConfig.filter((data) => data.active);
  };

export const getAllRegions = (onlyActives: boolean): Region[] => {
  const activeCountries = marketplaceDataConfig.filter(
    (data) => !onlyActives || data.active
  );
  const uniqueRegions: Region[] = Array.from(
    new Set(activeCountries.map(({region}) => region))
  );
  return uniqueRegions;
};

export const getCountriesByRegion = (
  region: Region,
  onlyActives: boolean
): CountryData[] => {
  return marketplaceDataConfig.filter(
    (data) => data.region === region && (!onlyActives || data.active)
  );
};

export const getCountryByName = (
  countryName: Country
): CountryData | undefined => {
  return marketplaceDataConfig.find((data) => data.countryName === countryName);
};
