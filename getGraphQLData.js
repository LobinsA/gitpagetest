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