import TokenBox from "./components/sections/token/TokenSection";
import Preise from "./components/sections/pricing/PricingSection";
import LaenderBox from "./components/sections/country/CountrySection";
import Toolbar from "./components/sections/toolbar/Toolbar";
import Sidemenu from "./components/sections/sidemenu/Sidemenu";
import { useOptionsContext } from "./context/optionsContext";
import { useToastContext } from "./context/toastContext";
import { useEffect } from "react";

function App() {
  const { clearAll } = useToastContext();
  const { setAsin } = useOptionsContext();

  useEffect(() => {
    setAsin("1231231231");

    setTimeout(() => {
      clearAll();
    }, 200);
  }, []);
  return (
    <div className="relative z-10 w-full h-screen bg-slate-100">
      <Sidemenu />

      <div className="flex h-full gap-3 p-3">
        {/** Left */}
        <div className="flex flex-col flex-1 w-1/6 gap-3">
          <Toolbar className="" />
          <Preise className="flex-1" />
        </div>

        {/** Right */}
        <div className="flex flex-col w-56 gap-3">
          <LaenderBox className="flex-1" />
          <TokenBox />
        </div>
      </div>
    </div>
  );
}

export default App;
