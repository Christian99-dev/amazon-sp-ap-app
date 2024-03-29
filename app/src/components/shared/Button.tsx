const Button = ({
  disabled = false,
  text,
  size = "md",
  onClick,
}: {
  disabled?: boolean;
  text: string;
  size?: "sm" | "md";
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type="button"
      className={`text-white text-nowrap h-min w-min ${
        disabled
          ? "bg-blue-300 cursor-not-allowed"
          : "bg-blue-600 hover:bg-blue-800"
      } font-medium text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center ${
        size === "sm"
          ? "text-xs px-2 py-1.5 rounded-md"
          : "text-sm px-5 py-2 rounded-lg"
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
