const storedAccessToken = localStorage.getItem('accessToken');
const outputElement = document.getElementById('output');
outputElement.textContent = "Nope.";
if(storedAccessToken) {
     outputElement.textContent = storedAccessToken;
} else {
    outputElement.textContent = "Nope.";
}