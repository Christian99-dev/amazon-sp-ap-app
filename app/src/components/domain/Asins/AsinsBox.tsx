import Input from "./Input";
import { useAsinsContext } from "../../../context/asinsContext";
import { usePricingContext } from "../../../context/pricingContext";

const AsinsBox = ({className} : {className?: string}) => {
  const { asins, handleChange } = useAsinsContext();
  const { startSearching } = usePricingContext();

  return (
    <div className="flex flex-row gap-2 align-center box">
      {asins.map((asin, index) => (
        <Input placeholder={`ASIN ${index}`} key={index} value={asin} onChange={(event: any) => handleChange(index, event.target.value)} />
      ))}
      <button onClick={startSearching} className="text-white h-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Submit
      </button>
    </div>
  );
};

export default AsinsBox;