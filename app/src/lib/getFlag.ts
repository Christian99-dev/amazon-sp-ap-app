import ES from "../media/flags/ES.svg";
import UK from "../media/flags/UK.svg";
import FR from "../media/flags/FR.svg";
import BE from "../media/flags/BE.svg";
import NL from "../media/flags/NL.svg";
import DE from "../media/flags/DE.svg";
import IT from "../media/flags/IT.svg";
import SE from "../media/flags/SE.svg";
import PL from "../media/flags/PL.svg";
import CA from "../media/flags/CA.svg";
import US from "../media/flags/US.svg";
import MX from "../media/flags/MX.svg";
import BR from "../media/flags/BR.svg";

export default (countryCode: string) => {
  switch (countryCode) {
    case "ES":
      return ES;
    case "UK":
      return UK;
    case "FR":
      return FR;
    case "BE":
      return BE;
    case "NL":
      return NL;
    case "DE":
      return DE;
    case "IT":
      return IT;
    case "SE":
      return SE;
    case "PL":
      return PL;
    case "CA":
      return CA;
    case "US":
      return US;
    case "MX":
      return MX;
    case "BR":
      return BR;
  }
};
