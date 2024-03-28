import TokenBox from "./components/sections/token/TokenSection";
import Preise from "./components/sections/pricing/PricingSection";
import LaenderBox from "./components/sections/country/CountrySection";
import AsinsBox from "./components/sections/asins/AsinsSection";
import { useEffect } from "react";
import { useTokenContext } from "./context/tokenContext";

function App() {
  const { manageTokenState } = useTokenContext();

  useEffect(() => {
    manageTokenState("eu", "get");
    manageTokenState("na", "get");
  }, []);

  return (
    <div className="flex w-screen h-screen gap-3 p-3 bg-slate-100">
      <div className="flex flex-col flex-1 gap-3">
        <AsinsBox />
        <Preise className="flex-1" />
      </div>
      <div className="flex flex-col w-56 gap-3">
        <LaenderBox className="flex-1" />
        <TokenBox />
      </div>
    </div>
  );
}

export default App;
