import { useAsinsContext } from "../../../context/asinsContext";
import { usePricingContext } from "../../../context/pricingContext";
import { useSideMenu } from "../../../context/sidemenuContext";
import { isAsin } from "../../../lib/regex";
import Button from "../../shared/Button";
import Input from "../../shared/Input";

const AsinsBox = ({ className }: { className?: string }) => {
  const { asin, setAsin, isValidAsin } = useAsinsContext();
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
    </div>
  );
};

export default AsinsBox;
