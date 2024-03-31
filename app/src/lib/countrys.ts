// prettier-ignore
const marketplaceDataConfig: CountryData[] = [
  // EU
  { countryName: "Germany",         countryCode: "DE", marketplaceId: "A1PA6795UKMFR9", region: "eu", active: true, endpoint: "https://sellingpartnerapi-eu.amazon.com" },
  { countryName: "Spain",           countryCode: "ES", marketplaceId: "A1RKKUPIHCS9HS", region: "eu", active: true, endpoint: "https://sellingpartnerapi-eu.amazon.com" },
  { countryName: "United Kingdom",  countryCode: "UK", marketplaceId: "A1F83G8C2ARO7P", region: "eu", active: true, endpoint: "https://sellingpartnerapi-eu.amazon.com" },
  { countryName: "France",          countryCode: "FR", marketplaceId: "A13V1IB3VIYZZH", region: "eu", active: true, endpoint: "https://sellingpartnerapi-eu.amazon.com" },
  { countryName: "Belgium",         countryCode: "BE", marketplaceId: "AMEN7PMS3EDWL",  region: "eu", active: true, endpoint: "https://sellingpartnerapi-eu.amazon.com" },
  { countryName: "Netherlands",     countryCode: "NL", marketplaceId: "A1805IZSGTT6HS", region: "eu", active: true, endpoint: "https://sellingpartnerapi-eu.amazon.com" },
  { countryName: "Italy",           countryCode: "IT", marketplaceId: "APJ6JRA9NG5V4",  region: "eu", active: true, endpoint: "https://sellingpartnerapi-eu.amazon.com" },
  { countryName: "Sweden",          countryCode: "SE", marketplaceId: "A2NODRKZP88ZB9", region: "eu", active: true, endpoint: "https://sellingpartnerapi-eu.amazon.com" },
  { countryName: "Poland",          countryCode: "PL", marketplaceId: "A1C3SOZRARQ6R3", region: "eu", active: true, endpoint: "https://sellingpartnerapi-eu.amazon.com" },

  // NA
  { countryName: "Canada",          countryCode: "CA", marketplaceId: "A2EUQ1WTGCTBG2", region: "na", active: true, endpoint: "https://sellingpartnerapi-na.amazon.com" },
  { countryName: "USA",             countryCode: "US", marketplaceId: "ATVPDKIKX0DER",  region: "na", active: true, endpoint: "https://sellingpartnerapi-na.amazon.com" },
  { countryName: "Mexico",          countryCode: "MX", marketplaceId: "A1AM78C64UM0Y8", region: "na", active: true, endpoint: "https://sellingpartnerapi-na.amazon.com" },
  { countryName: "Brazil",          countryCode: "BR", marketplaceId: "A2Q3Y263D00KWC", region: "na", active: true, endpoint: "https://sellingpartnerapi-na.amazon.com" },
];

export const getRegionName = (regionCode: "na" | "eu"): string => {
  switch (regionCode) {
    case "eu":
      return "Europa";
    case "na":
      return "North America";
  }
};

export const getCountryCodeFromMarketplaceID = (marketplaceId: string): string | undefined => {
  const foundEntry = marketplaceDataConfig.find(
    (data) => data.marketplaceId === marketplaceId
  );

  return foundEntry?.countryCode; // Return countryCode if found, otherwise undefined
};

// Types
export type CountryData = {
  countryName: string;
  countryCode: string;
  marketplaceId: string;
  region: Region;
  active: boolean;
  endpoint: string;
};

export type Region = "na" | "eu";

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
  | "Poland";

export const getAllActiveCountries = (): CountryData[] => {
  return marketplaceDataConfig.filter((data) => data.active);
};

export const getAllRegions = (onlyActives: boolean): Region[] => {
  const activeCountries = marketplaceDataConfig.filter(
    (data) => !onlyActives || data.active
  );
  const uniqueRegions: Region[] = Array.from(
    new Set(activeCountries.map(({ region }) => region))
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
