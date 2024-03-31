import Icon, { iconNames } from "./Icon";

const Input = ({
  className,
  status,
  value,
  placeholder,
  iconName,
  onChange,
  onButton,
  disableButton = false,
}: {
  className?: string;
  value: string;
  status?: "error" | "success";
  placeholder: string;
  iconName?: iconNames;
  onChange: (event: any) => void;
  onButton?: () => void;
  disableButton?: boolean;
}) => {
  const getColorClasses = (status: "error" | "success" | "idle") => {
    switch (status) {
      case "error":
        return "bg-red-50 border border-red-700 text-red-900 placeholder-red-700 ";
      case "success":
        return "bg-green-50 border border-green-700 text-green-900 placeholder-green-700 ";
      case "idle":
        return "bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400 ";
    }
  };

  return (
    <div className="flex h-min">
      <input
        onChange={onChange}
        value={value}
        type="text"
        className={`${className} rounded-none rounded-l-lg text-xs w-28 px-2 py-1.5 font-[600] placeholder:font-normal outline-none ${getColorClasses(
          value == "" || status == undefined ? "idle" : status
        )} ${!iconName && "!rounded-r-lg"} ${iconName && "!border-r-0"}`}
        placeholder={placeholder}
      />
      {iconName && (
        <span
          onClick={() => {
            if (
              !disableButton &&
              disableButton !== undefined &&
              onButton !== undefined
            )
              onButton();
          }}
          className={`h-[37px] px-1 flex justify-center rounded-l-0 rounded-tr-md rounded-br-md ${
            disableButton
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-800 cursor-pointer"
          }`}
        >
          <Icon className="box-content w-5" iconName={iconName} />
        </span>
      )}
    </div>
  );
};

export default Input;
