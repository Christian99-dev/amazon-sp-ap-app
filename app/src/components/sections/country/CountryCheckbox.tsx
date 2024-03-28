import { CountryData } from "../../../lib/countrys";
import Checkbox from "../../shared/Checkbox";

export const CountryCheckbox = ({
  country,
  selectedCountries,
  removeCountry,
  addCountry,
}: {
  country: CountryData;
  selectedCountries: CountryData[];
  removeCountry: (country: CountryData) => void;
  addCountry: (country: CountryData) => void;
}) => {
  
  /**
   * Helper
   */
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
      <Checkbox
        id={country.countryCode}
        htmlFor={country.countryCode}
        checked={isSelected()}
        onChange={handleCheckboxChange}
        text={country.countryName}
      />
    </div>
  );
};
