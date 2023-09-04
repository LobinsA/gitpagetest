async function main() {
    const clientId = '9a0aa469-2c63-4491-b767-3354eba1bd79';
    const clientSecret = 'EPWbyJyeV6pDzBGB3wKIJx2coL18qrDGiLhUcn6o';
    const tokenUrl = 'https://www.warcraftlogs.com/oauth/token';
    const publicUrl = 'https://www.warcraftlogs.com/api/v2/client';

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
  
    const accessToken = await getAccessToken(tokenUrl,requestOptions);
    //console.log(accessToken);
    const graphqlQuery = `
    query{
        characterData{
            character(name:"Sci",serverSlug:"Area-52",serverRegion:"US"){
                level
                classID
                name
            }
    }
    `;
 
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        grant_type: 'client_credentials',
        Authorization: `Bearer ${accessToken}`,
      },
      body: `{"query": ${graphqlQuery}}`
    };

    // Make the GraphQL API call
    fetch(publicUrl, options)
    .then(response => response.json())
    .then(data => {
        //dataElement.textContent = data;
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    }); 

  }
  
  async function getAccessToken(tokenUrl, requestOptions) {
    try {
      const response = await fetch(tokenUrl, requestOptions);
  
      if (!response.ok) {
        throw new Error('Request failed with status: ' + response.status);
      }
  
      const data = await response.json();
      const accessToken = data.access_token;
  
      return accessToken;
    } catch (error) {
      console.error('Fetch error:', error);
      throw error; 
    }
  }
    
  main()
  