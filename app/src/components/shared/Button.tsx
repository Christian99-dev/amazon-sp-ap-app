import Icon, { iconNames } from "./Icon";

const Button = ({
  disabled = false,
  text,
  onClick,
  icon: iconName,
  className
}: {
  disabled?: boolean;
  text?: string;
  onClick: () => void;
  icon?: iconNames;
  className?: string
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type="button"
      className={`${className} text-white text-nowrap h-min rounded-lg font-medium text-center inline-flex items-center text-xs ${
        disabled
          ? "bg-blue-300 cursor-not-allowed"
          : "bg-blue-600 hover:bg-blue-800"
      } ${iconName ? "px-1.5 py-[6.3px]" : "px-2 py-[8.5px]"}`}
    >
      {iconName ? <Icon className="h-5" iconName={iconName} /> : text}
    </button>
  );
};

export default Button;
