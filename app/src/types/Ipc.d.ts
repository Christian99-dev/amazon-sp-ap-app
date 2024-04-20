type ManageTokenIPCResponse = {
  code: number;
  message: string;
  access_token: string;
};

type ChangeCredentialsIPCResponse = {
  code: number;
  message: string;
};

type GetCredentialsIPCResponse = {
  code: number;
  message: string;
  value: string;
};

type GetListingForAsinIPCResponse = {
  code: number;
  message: string;
  response: {
    response_eu:
      | {
          responses: ItemsOnMarketplaceAmazonResponse[];
        }
      | undefined;
    response_na:
      | {
          responses: ItemsOnMarketplaceAmazonResponse[];
        }
      | undefined;
  };
};
