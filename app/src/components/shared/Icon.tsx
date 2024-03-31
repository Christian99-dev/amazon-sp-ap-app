import Checkmark from "../../media/icons/checkmark.svg";
import Refresh from "../../media/icons/refresh.svg";
import Trashcan from "../../media/icons/trashcan.svg";
import Settings from "../../media/icons/settings.svg";
import Search from "../../media/icons/search.svg";


export type iconNames = "checkmark" | "refresh" | "trashcan" | "settings" | "search"
const Icon = ({
  iconName,
  className,
}: {
  iconName: iconNames;
  className?: string;
}) => {
  const getIconResource = (
    iconName: iconNames
  ) => {
    switch (iconName) {
      case "checkmark":
        return Checkmark;
      case "refresh":
        return Refresh;
      case "trashcan":
        return Trashcan;
      case "settings":
        return Settings;
      case "search":
        return Search;
    }
  };

  return <img className={className} src={getIconResource(iconName)}></img>;
};

export default Icon;
