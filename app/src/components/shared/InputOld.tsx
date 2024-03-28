import { isAsin } from "../../lib/regex";

const Input = ({
  placeholder,
  value,
  onChange,
}: {
  placeholder: string;
  value: string;
  onChange: any;
}) => {

  const inputStyle = {
    backgroundColor:
      value === "" ? "#FFFFFF" : isAsin(value) ? "#E6F4EA" : "#FEE2E2",
    borderColor:
      value === "" ? "#D1D5DB" : isAsin(value) ? "#34D399" : "#EF4444",
    color: value === "" ? "#6B7280" : isAsin(value) ? "#059669" : "#DC2626",
    outline: "none", 
  };

  return (
    <input
      onChange={onChange}
      value={value}
      type="text"
      id="first_name"
      className="bg-gray-50 w-28 h-10 border border-gray-300 text-cyan-600 text-sm rounded-lg p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
      placeholder={placeholder}
      style={inputStyle}
    />
  );
};

export default Input;