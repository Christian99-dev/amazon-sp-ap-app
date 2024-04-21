type PossibleCredentialIDs =
  | "client_id"
  | "client_secret"
  | "refresh_token_eu"
  | "refresh_token_na"
  | "seller_id_eu"
  | "seller_id_na";

type Credentials = {
  client_id: string;
  client_secret: string;
  refresh_token_eu: string;
  refresh_token_na: string;
  seller_id_eu: string;
  seller_id_na: string;
}