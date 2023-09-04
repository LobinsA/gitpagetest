const storedAccessToken = localStorage.getItem('accessToken');
const outputElement = document.getElementById('output');

if(storedAccessToken) {
     outputElement.textContent = storedAccessToken;
} else {
    outputElement.textContent = "Nope.";
}