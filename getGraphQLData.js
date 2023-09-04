const publicUrl = 'https://www.warcraftlogs.com/oauth/token';

try {
    const storedAccessToken = sessionStorage.getItem('accessToken');
    const outputElement = document.getElementById('output');
    const dataElement = document.getElementById('sci');

    if(storedAccessToken) {
        outputElement.textContent = "Success!";
        //todo: create queries for graphql and return certain data
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

        const headers = {
            'Authorization': `Bearer ${storedAccessToken}`,
            'Content-Type': 'application/json',
        };

        // Create the request options
        const requestOptions = {
        method: 'GET',
        headers: headers,
        body: JSON.stringify({ query: graphqlQuery }),
        };

        // Make the GraphQL API call
        fetch(publicUrl, requestOptions)
        .then(response => response.json())
        .then(data => {
            dataElement.textContent(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    } else {
        outputElement.textContent = "Fail!";
    }
} catch (error) {
        outputElement.textContent = "Fail!";
}