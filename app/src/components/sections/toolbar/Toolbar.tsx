import { useAsinsContext } from "../../../context/asinsContext";
import { usePricingContext } from "../../../context/pricingContext";
import { useSideMenu } from "../../../context/sidemenuContext";
import { isAsin } from "../../../lib/regex";
import Button from "../../shared/Button";
import Input from "../../shared/Input";

const AsinsBox = ({ className }: { className?: string }) => {
  const { asins, handleChange, addAsin, delAsin, canAdd } = useAsinsContext();
  const { startSearching, isLoading } = usePricingContext();
  const {toggleMenu} = useSideMenu();

  const handleInputChange = (index: number, value: string) => {
    handleChange(index, value);
  };

  const handleDeleteAsin = (index: number) => {
    delAsin(index);
  };

  return (
    <div
      className={`${className} flex flex-row gap-2 align-center box flex-wrap`}
    >
      <Button onClick={toggleMenu} icon="settings" />
      {asins.map((asin, index) => (
        <Input
          status={isAsin(asin) ? "success" : "error"}
          key={index}
          value={asin}
          placeholder={`ASIN ${index + 1}`}
          onChange={(event) => handleInputChange(index, event.target.value)}
          onButton={() => startSearching()}
          iconName={asins.length > 0 ? "search" : undefined}
          disableButton={isLoading}
        />
      ))}
    </div>
  );
};

export default AsinsBox;
