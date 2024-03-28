import TokenText from "./TokenText";
import { useTokenContext } from "../../../context/tokenContext";

const Token = ({ className }: { className?: string }) => {
  const {
    tokenState: {
      loadingEuToken,
      loadingNaToken,
      accessTokenEU,
      accessTokenNA,
    },
    manageTokenState,
  } = useTokenContext();

  return (
    <div className={`${className} box`}>
      <h1 className="pb-2">Access Token</h1>
      <TokenText
        onClickNew={() => {
          manageTokenState("eu", "refresh");
        }}
        region="EU"
        token={accessTokenEU}
        isLoading={loadingEuToken}
        className="pb-1"
      />
      <TokenText
        onClickNew={() => {
          manageTokenState("na", "refresh");
        }}
        region="NA"
        token={accessTokenNA}
        isLoading={loadingNaToken}
      />
    </div>
  );
};

export default Token;
