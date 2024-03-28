import { reduceString } from "../../../lib/textActions";
import Button from "../../shared/Button";
import Spinner from "../../shared/Spinner";

const TokenText = ({
  region,
  token,
  isLoading,
  className,
  onClickNew,
}: {
  region: string;
  token: string;
  isLoading: boolean;
  className?: string;
  onClickNew: () => void;
}) => {
  return (
    <div className={`${className} flex items-center`}>
      <Button onClick={onClickNew} disabled={isLoading} text="New" size="sm" />
      <span className="mr-2 text-sm font-medium text-black">{region}:</span>
      {!isLoading ? (
        <span className="text-[13px] font-bold text-green-500">
          {token !== "" ? reduceString(token, 20) : <span className="text-[13px] font-bold text-red-500">(leer)</span>}
        </span>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default TokenText;
