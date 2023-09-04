const publicUrl = 'https://www.warcraftlogs.com/oauth/token';

try {
    const storedAccessToken = sessionStorage.getItem('accessToken');
    const outputElement = document.getElementById('output');

if(storedAccessToken) {
    outputElement.textContent = "Success!";
} else {
    outputElement.textContent = "Fail!";
}
} catch (error) {
    outputElement.textContent = "Fail!";
}

//todo: create queries for graphql and return certain data
const graphqlQuery = `
  query {
    player(name: "YourPlayerName") {
      combat(characterID: "YourCharacterID") {
        damageTaken {
          total
          details {
            ability {
              name
            }
            total
          }
        }
      }
    }
  }
`;

const headers = {
    'Authorization': `Bearer ${storedAccessToken}`,
    'Content-Type': 'application/json',
};

// Create the request options
const requestOptions = {
  method: 'POST',
  headers: headers,
  body: JSON.stringify({ query: graphqlQuery }),
};

// Make the GraphQL API call
fetch(publicUrl, requestOptions)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });