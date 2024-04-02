import {
  Region,
  getAllRegions,
  getCountriesByRegion,
  getRegionName,
} from "../../../lib/countrys";
import { useCountryContext } from "../../../context/countryContext";
import { CountryCheckbox } from "./CountryCheckbox";
import Button from "../../shared/Button";

const LaenderBox = ({ className }: { className?: string }) => {
  const {
    selectedCountries,
    addCountry,
    removeCountry,
    switchAllOff,
    switchAllOn,
    hasCountrysSelected,
  } = useCountryContext();

  return (
    <div className={`${className} box flex flex-col gap-4`}>
      {getAllRegions(true).map((region: Region) => (
        <div key={region}>
          <h2 className="mb-1">{getRegionName(region)}</h2>

          {getCountriesByRegion(region, true).map((country, index) => (
            <CountryCheckbox
              key={index}
              country={country}
              selectedCountries={selectedCountries}
              addCountry={addCountry}
              removeCountry={removeCountry}
            />
          ))}
        </div>
      ))}
      <Button
        text={hasCountrysSelected ? "Switch All OFF" : "Switch All ON"}
        className="mx-auto w-min"
        onClick={() => {
          hasCountrysSelected ? switchAllOff() : switchAllOn();
        }}
      />
    </div>
  );
};

export default LaenderBox;
