type PossibleCredentialIDs =
  | "client_id"
  | "client_secret"
  | "refresh_token_eu"
  | "refresh_token_na"
  | "seller_id";

type Credentials = {
  client_id: string;
  client_secret: string;
  refresh_token_eu: string;
  refresh_token_na: string;
  seller_id: string;
}