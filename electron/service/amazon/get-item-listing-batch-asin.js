module.exports = async (region, access_token, body) => {
  let testing = false;
  let response;

  let endpoint =
    region === "na"
      ? "https://sellingpartnerapi-na.amazon.com"
      : "https://sellingpartnerapi-eu.amazon.com";

  if (testing) {
    // Führe die gleiche Logik durch, aber gib stattdessen den Test-Token zurück
    response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          ok: true,
          status: 200,
          statusText: "OK",
          json: async () => {
            return require("./../../json/listing_offers.json")
          },
        });
      }, 500);
    });
  } else {
    try {
      response = await fetch(
        `${endpoint}/batches/products/pricing/v0/itemOffers`,
        {
          method: "POST",
          headers: {
            "x-amz-access-token": access_token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            requests: body,
          }),
        }
      );
    } catch (error) {
      throw new Error("Unbekannter Fehler");
    }
  }

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  return data;
};
