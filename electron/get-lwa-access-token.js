module.exports = async (
  client_id,
  client_secret,
  refresh_token
) => {
  // Testflag
  let testing = true; 
  let response;

  if (testing) {
    // Führe die gleiche Logik durch, aber gib stattdessen den Test-Token zurück
    response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          ok: false,
          status: 200,
          statusText: "OK",
          json: async () => {
            return {
              access_token: 'test_' + Math.random().toString()
            };
          }
        });
      }, 500);
    });
  } else {
    // Normaler Fetch für den echten Aufruf
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
  }
  
  if (!response.ok) {
    throw new Error(
      `${response.status} ${response.statusText}`
    );
  }

  const data = await response.json();
  return data.access_token;
};