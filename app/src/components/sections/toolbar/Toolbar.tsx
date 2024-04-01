import { useOptionsContext } from "../../../context/optionsContext";
import { usePricingContext } from "../../../context/pricingContext";
import { useSideMenu } from "../../../context/sidemenuContext";
import Button from "../../shared/Button";
import Input from "../../shared/Input";

const AsinsBox = ({ className }: { className?: string }) => {
  const { asin, setAsin, isValidAsin, flipCondition, condition } =
    useOptionsContext();
  const { startSearching, isLoading } = usePricingContext();
  const { toggleMenu } = useSideMenu();

  return (
    <div
      className={`${className} flex flex-row gap-2 align-center box flex-wrap`}
    >
      <Button onClick={toggleMenu} icon="settings" />
      <Input
        status={isValidAsin ? "success" : "error"}
        value={asin}
        placeholder={`ASIN`}
        onChange={(event) => setAsin(event.target.value)}
        onButton={() => startSearching()}
        iconName={"search"}
        disableButton={isLoading}
      />
      <h1 className="flex items-center ml-auto text-sm">Zustand:</h1>
      <Button className="maring" onClick={flipCondition} text={condition} disabled={isLoading} />
    </div>
  );
};

export default AsinsBox;
