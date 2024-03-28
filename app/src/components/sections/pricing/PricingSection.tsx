import Button from "../../shared/Button";
import { useAsinsContext } from "../../../context/asinsContext";

const Preise = ({ className }: { className?: string }) => {
  const { getValidAsins } = useAsinsContext();

  return (
    <div className={`${className} gap-5 box`}>
      <Button text="PREISE ANZEIGEN" onClick={() => {}} />
    </div>
  );
};

export default Preise;
