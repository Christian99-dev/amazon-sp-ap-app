const OLD_ACCESS_TOKEN = "Atza|IwEBIK96A6BGqQuTTI4T-0TOMLGV2gkqoDiOs_GFmZc8pOkrTwmzGzMVNbTVItszWYhfg8Qm-oNv9nGDD6d-opG52_P9D_gxNT-w08mesMsenHkfPa6Kpl7lGKzATKvxqviqbTxgi1B6LNzES0rKxiFcv5szMT9mh70uqDPJsJQkOiHeo32UCSCTsM7HmguSWEcaqBgvAXUPis8OoODcu2d-4qssBuV959ksfO34n6mr_JubX8U5DqUNeZiDz4eX8nQX04G-IsTCGrMGEm3BSUhwKBJ4LMNaeMIKJ03adBgMYEbhSVozQvzEhXx29ccH3mjfQYTSYOBXWPemDQ5yO-CmHlydtTnREqBVqXcXgmevJ4ZZkQ"
const TESTING = false;
const USE_OLD_ACCESS_TOKEN = false;

module.exports = async (client_id, client_secret, refresh_token) => {
  let response;

  if (TESTING) {
    // Führe die gleiche Logik durch, aber gib stattdessen den Test-Token zurück
    response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          ok: true,
          status: 200,
          statusText: "OK",
          json: async () => {
            return {
              access_token: USE_OLD_ACCESS_TOKEN ? OLD_ACCESS_TOKEN : "test_" + Math.random().toString(),
            };
          },
        });
      }, 500);
    });
  } else {
    // Normaler Fetch für den echten Aufruf
    try {
      response = await fetch("https://api.amazon.com/auth/o2/token", {
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
    } catch (error) {
      throw new Error("Unbekannter Fehler");
    }
  }

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  return data.access_token;
};
