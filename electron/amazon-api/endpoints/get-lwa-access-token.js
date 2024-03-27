const getLWAAccessToken = async (client_id, client_secret, refresh_token) => {
  const response = await fetch("https://api.amazon.com/auth/o2/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refresh_token,
      client_id: client_id,
      client_secret: client_secret,
    }),
  });

  if (!response.ok) {
    throw new Error(
      `Fehler beim Abrufen des LWA-Zugriffstokens: ${response.status} ${response.statusText}`
    );
  }

  const data = await response.json();
  return data.access_token;
};

module.exports = {
  getLWAAccessToken,
};
