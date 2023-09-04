const storedAccessToken = localStorage.getItem('accessToken');

if(storedAccessToken) {
    const outputElement = document.getElementById('output');
    outputElement.textContent = storedAccessToken;
} else {
    console.log('Access Token not found');
}