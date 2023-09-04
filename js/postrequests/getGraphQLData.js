const clientId = '9a0aa469-2c63-4491-b767-3354eba1bd79';
const clientSecret = 'EPWbyJyeV6pDzBGB3wKIJx2coL18qrDGiLhUcn6o';
const tokenUrl = 'https://www.warcraftlogs.com/oauth/token';
const publicUrl = 'https://www.warcraftlogs.com/api/v2/client';

//const storedAccessToken = sessionStorage.getItem('accessToken');
// Create a basic authorization header by base64 encoding the client ID and client secret
async function getAccessToken() {
    const credentials = `${clientId}:${clientSecret}`;
    const encodedCredentials = btoa(credentials);
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${encodedCredentials}`,
        },
        body: 'grant_type=client_credentials', // Use the client credentials grant type
    };
    try {
      const response = await fetch(tokenUrl, options);
      if (!response.ok) {
        throw new Error('Request failed with status: ' + response.status);
      }
      const data = await response.json();
      const accessToken = data.accessToken;
      return accessToken;
    } catch (error) {
      console.error('Fetch error:', error);
      throw error; 
    }
}

const fetchWarcraftLogsData = async (accessToken) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        grant_type: 'client_credentials',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        query: `query {
          characterData {
            character(name: "Sci", serverSlug: "Area-52", serverRegion: "US") {
              level
              classID
              name
            }
          }
        }`,
      }),
    };
  
    try {
      const response = await fetch(publicUrl, options);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data.data.characterData);
    } catch (error) {
      console.error(error);
      throw error;
    } 
  };
  
  const accessToken = getAccessToken();
  console.log(accessToken);
  //fetchWarcraftLogsData(accessToken);
  