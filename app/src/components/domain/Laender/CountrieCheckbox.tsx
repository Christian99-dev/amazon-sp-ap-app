import { CountryData } from "../../../amazon-api/lib/countrys";

export const CountryCheckbox = ({
  country,
  selectedCountries,
  removeCountry,
  addCountry,
}: {
  country: CountryData;
  selectedCountries: CountryData[];
  removeCountry: (country: CountryData) => void,
  addCountry: (country: CountryData) => void
}) => {
  const isSelected = () => selectedCountries.some((c) => c === country);

  const handleCheckboxChange = () => {
    if (isSelected()) {
      removeCountry(country);
    } else {
      addCountry(country);
    }
  };

  return (
    <div className="flex items-center mb-1">
      <input
        id={country.countryCode}
        type="checkbox"
        checked={isSelected()}
        onChange={handleCheckboxChange}
        className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor={country.countryCode}
        className="text-xs font-medium text-gray-900 ms-2 dark:text-gray-300"
      >
        {country.countryName}
      </label>
    </div>
  );
};
