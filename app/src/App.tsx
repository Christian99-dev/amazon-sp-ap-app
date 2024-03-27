import React, { useEffect } from "react";
import TokenBox from "./components/domain/TokenBox/TokenBox";
import Preise from "./components/domain/Preise/Preise";
import LaenderBox from "./components/domain/Laender/LaenderBox";
import AsinsBox from "./components/domain/Asins/AsinsBox";

function App() {
  return (
    <div className="grid h-screen grid-cols-6 gap-4 p-3 grid-rows-10 bg-slate-100">
      <div className="col-span-4 col-start-1 row-span-2 row-start-1">
        <AsinsBox/>
      </div>
      <div className="col-span-4 col-start-1 row-start-3 row-span-8">
        <Preise />
      </div>
      <div className="col-span-2 col-start-5 row-start-1 row-span-8">
        <LaenderBox />
      </div>
      <div className="col-span-2 col-start-5 row-span-2 row-start-9">
        <TokenBox />
      </div>
    </div>
  );
}

export default App;
