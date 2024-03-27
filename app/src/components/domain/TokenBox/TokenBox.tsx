import React, { useEffect, useState } from "react"; 
import TokenText from "./TokenText";
import { useTokenContext } from "../../../context/tokenContext";

const Token = () => {
  const {
    tokenState: {
      loadingEuToken,
      loadingNaToken,
      accessTokenEU,
      accessTokenNA,
    },
  } = useTokenContext();

  return (
    <div className="box">
      <h1>Access Token</h1>

      <div className="flex flex-col justify-center">
        <TokenText
          region="EU"
          token={accessTokenEU}
          isLoading={loadingEuToken}
        />
        <TokenText
          region="NA"
          token={accessTokenNA}
          isLoading={loadingNaToken}
        />
      </div>
    </div>
  );
};

export default Token;
