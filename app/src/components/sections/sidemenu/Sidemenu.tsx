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
    setCredentialStorage,
  } = useCredentialsContext();

  return (
    <>
      <div
        className={`absolute z-20 w-full h-full bg-opacity-50 bg-slate-500 ${
          !isOpen && "bg-opacity-0 z-[-1]"
        } transition-all`}
      />
      <div
        className={`absolute z-30 flex flex-col h-full gap-3 p-3 bg-white shadow-xl w-80 ${
          !isOpen ? "translate-x-[-100%]" : "translate-x-0"
        } transition-all`}
      >
        <div className="flex justify-between">
          <h1>Amazon Credentials</h1>
          <Button className="ml-auto" onClick={toggleMenu} icon="settings" />
        </div>

        <div>
            
        </div>
        <SidemenuInput
          labelLeft="Client ID"
          labelRight={credentialsLabel.client_id}
          value={credentialsInput.client_id}
          onChange={(event) => {
            changeCredentialInputState("client_id", event.target.value);
          }}
          onButton={() => {
            setCredentialStorage("client_id");
          }}
          disableButton={isLoading}
          iconName="refresh"
          placeholder=""
        />

        <SidemenuInput
          labelLeft="Client Secret"
          labelRight={credentialsLabel.client_secret}
          value={credentialsInput.client_secret}
          onChange={(event) => {
            changeCredentialInputState("client_secret", event.target.value);
          }}
          onButton={() => {
            setCredentialStorage("client_secret");
          }}
          disableButton={isLoading}
          iconName="refresh"
          placeholder=""
        />

        <SidemenuInput
          labelLeft="Refresh Token EU"
          labelRight={credentialsLabel.refresh_token_eu}
          value={credentialsInput.refresh_token_eu}
          onChange={(event) => {
            changeCredentialInputState("refresh_token_eu", event.target.value);
          }}
          onButton={() => {
            setCredentialStorage("refresh_token_eu");
          }}
          disableButton={isLoading}
          iconName="refresh"
          placeholder=""
        />

        <SidemenuInput
          labelLeft="Refresh Token NA"
          labelRight={credentialsLabel.refresh_token_na}
          value={credentialsInput.refresh_token_na}
          onChange={(event) => {
            changeCredentialInputState("refresh_token_na", event.target.value);
          }}
          onButton={() => {
            setCredentialStorage("refresh_token_na");
          }}
          disableButton={isLoading}
          iconName="refresh"
          placeholder=""
        />
      </div>
    </>
  );
};

export default Sidemenu;
