export const getPricingAsin = async (
  marketplace_Id: string,
  asins: string,
  access_token: string
): Promise<any> => {
  const response = await fetch(
    "https://api.amazon.com/products/pricing/v0/price",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "x-amz-access-token" : access_token
      },
      body: new URLSearchParams({
        marketplace_Id: marketplace_Id,
        asins: asins,
        ItemType: "asin",
      }),
    }
  );

  if (!response.ok) {
    throw new Error(
      `Fehler beim Abrufen des LWA-Zugriffstokens: ${response.status} ${response.statusText}`
    );
  }

  const data = await response.json();
  return data;
};
