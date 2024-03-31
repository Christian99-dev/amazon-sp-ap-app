import { usePricingContext } from "../../../context/pricingContext";
import Spinner from "../../shared/Spinner";
import PricingTable from "./PricingTable";

const Preise = ({ className }: { className?: string }) => {
  const { currentProducts, isLoading } = usePricingContext();

  return (
    <div className={`${className} gap-5 box relative !p-0`}>
      {isLoading ? (
        <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center rounded-lg bg-opacity-30 bg-slate-600">
          <Spinner size="lg" />
        </div>
      ) : (
        <PricingTable currentProducts={currentProducts} />
      )}
    </div>
  );
};

export default Preise;
