import { useCredentialsContext } from "../../../context/credentlalsContext";
import { useSideMenu } from "../../../context/sidemenuContext";
import Button from "../../shared/Button";
import SidemenuInput from "./SidemenuInput";

const Sidemenu = () => {
  const { isOpen, toggleMenu } = useSideMenu();
  const {
    credentialsInput,
    credentialsLabel,
    changeCredentialInputState,
    isLoading,
    setCredentialStorageAndUpdateLabel,
  } = useCredentialsContext();

  const credentialInputsOnSidebar: {
    label: string;
    id: PossibleCredentialIDs;
  }[] = [
    { label: "Client ID", id: "client_id" },
    { label: "Client Secret", id: "client_secret" },
    { label: "Seller ID EU", id: "seller_id_eu" },
    { label: "Seller ID NA", id: "seller_id_na" },
    { label: "Refresh Token EU", id: "refresh_token_eu" },
    { label: "Refresh Token NA", id: "refresh_token_na" },
  ];

  return (
    <>
      {/** Background */}
      <div
        className={`absolute  w-full h-full  bg-slate-500 ${
          !isOpen ? "bg-opacity-0 z-[-1]" : "bg-opacity-50 z-20"
        } transition-all`}
      />

      {/** Sidebar */}
      <div
        className={`absolute z-30 flex flex-col h-full gap-3 p-3 bg-white shadow-xl w-80 ${
          !isOpen ? "translate-x-[-100%]" : "translate-x-0"
        } transition-all`}
      >
        {/** Head */}
        <div className="flex justify-between mb-4">
          <h1>Amazon Credentials</h1>
          <Button className="ml-auto" onClick={toggleMenu} icon="settings" />
        </div>

        {/** Credentials */}
        {credentialInputsOnSidebar.map(({ id, label }, key) => {
          return (
            <SidemenuInput
              key={key}
              labelLeft={label}
              labelRight={credentialsLabel[id]}
              value={credentialsInput[id]}
              onChange={(event) => {
                changeCredentialInputState(id, event.target.value);
              }}
              onButton={() => {
                setCredentialStorageAndUpdateLabel(id);
              }}
              disableButton={isLoading}
              iconName="refresh"
              placeholder=""
            />
          );
        })}
      </div>
    </>
  );
};

export default Sidemenu;
