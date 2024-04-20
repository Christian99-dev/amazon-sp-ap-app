const Checkbox = ({
  id,
  checked,
  onChange,
  htmlFor,
  text,
}: {
  id: string;
  checked: boolean;
  onChange: () => any;
  htmlFor: string;
  text: string;
}) => {
  return (
    <div className="flex items-center mb-1">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded cursor-pointer  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor={htmlFor}
        className="text-xs font-medium text-gray-900 cursor-pointer  ms-2 dark:text-gray-300"
      >
        {text}
      </label>
    </div>
  );
};

export default Checkbox;
