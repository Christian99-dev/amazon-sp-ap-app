import { useAsinsContext } from "../../../context/asinsContext";
import { isAsin } from "../../../lib/regex";
import Button from "../../shared/Button";
import Input from "../../shared/Input";

const AsinsBox = ({ className }: { className?: string }) => {
  const { asins, handleChange, addAsin, delAsin, canAdd } = useAsinsContext();

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
      <Button disabled={canAdd} onClick={addAsin} size="sm" text="Hinzufügen" />
      {asins.map((asin, index) => (
        <Input
          status={isAsin(asin) ? "success" : "error"}
          key={index}
          value={asin}
          placeholder={`ASIN ${index + 1}`}
          onChange={(event) => handleInputChange(index, event.target.value)}
          onDeleteButton={() => handleDeleteAsin(index)}
          hasDeleteButton={asins.length > 1} // Only show delete button if there's more than 1 ASIN
        />
      ))}
    </div>
  );
};

export default AsinsBox;
