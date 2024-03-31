import Input from "../../shared/Input";
import { iconNames } from "../../shared/Icon";
import { reduceString } from "../../../lib/textActions";

const SidemenuInput = ({
  labelLeft,
  labelRight,
  onChange,
  onButton,
  value,
  placeholder,
  disableButton,
  iconName,
}: {
  labelLeft: string;
  labelRight: string;
  onChange: (event: any) => void;
  onButton: () => void;
  value: string;
  placeholder: string;
  disableButton: boolean;
  iconName?: iconNames;
}) => {
  return (
    <div>
      <div className="flex justify-between ">
        <h3 className="text-sm">{labelLeft}</h3>
        <p className="text-[13px] font-[600] text-blue-500">
          {labelRight !== "" ? (
            reduceString(labelRight, 20)
          ) : (
            <span className="text-[13px] font-bold text-red-500">(leer)</span>
          )}
        </p>
      </div>
      <Input
        onChange={onChange}
        onButton={onButton}
        value={value}
        className="!w-full"
        placeholder={placeholder}
        iconName={iconName}
        disableButton={disableButton}
      />
    </div>
  );
};

export default SidemenuInput;
