import React from "react";
import { useTokenContext } from "../../../context/tokenContext";
import { getAllRegions } from "../../../lib/countrys";

const Preise = ({className} : {className?: string}) => {
  return <div className={`${className} gap-5 box`}>Preise</div>;
};

export default Preise;
