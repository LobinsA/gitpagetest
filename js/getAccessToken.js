const clientId = '9a0aa469-2c63-4491-b767-3354eba1bd79';
const clientSecret = 'EPWbyJyeV6pDzBGB3wKIJx2coL18qrDGiLhUcn6o';
const tokenUrl = 'https://www.warcraftlogs.com/oauth/token';

// Create a basic authorization header by base64 encoding the client ID and client secret
const credentials = `${clientId}:${clientSecret}`;
const encodedCredentials = btoa(credentials);

// Define the request options
const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': `Basic ${encodedCredentials}`,
  },
  body: 'grant_type=client_credentials', // Use the client credentials grant type
};

let accessToken = localStorage.getItem('access_token');

if(!accessToken) {
  getAccessToken(tokenUrl,requestOptions);
}

function getAccessToken(tokenUrl, requestOptions){
  // Send the POST request to obtain the access token
  fetch(tokenUrl, requestOptions)
    .then(response => {
      if (!response.ok) {
        throw new Error('Request failed with status: ' + response.status);
      }
      return response.json();
    })
    .then(data => {
      // Handle the token response here
      console.log('Access Token:', data.access_token);
      let accessToken = data.access_token;
      localStorage.setItem('access_token', accessToken);
      return accessToken;
    })
    .catch(error => {
      // Handle any errors that occurred during the fetch
      console.error('Fetch error:', error);
    });
    return null;
}
