import { usePricingContext } from "../../../context/pricingContext";
import Button from "../../shared/Button";
import Spinner from "../../shared/Spinner";

const Preise = ({ className }: { className?: string }) => {
  const { startSearching, currentResponse, isLoading } = usePricingContext();

  return (
    <div className={`${className} gap-5 box relative`}>
      {isLoading && (
        <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center rounded-lg bg-opacity-30 bg-slate-600">
          <Spinner size="lg" />
        </div>
      )}
      <Button
        text="PREISE ANZEIGEN"
        onClick={() => {
          startSearching();
        }}
      />
    </div>
  );
};

export default Preise;
