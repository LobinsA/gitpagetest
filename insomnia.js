const fetchWarcraftLogsData = async () => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      grant_type: 'client_credentials',
      Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5YTBhYTQ2OS0yYzYzLTQ0OTEtYjc2Ny0zMzU0ZWJhMWJkNzkiLCJqdGkiOiIzZjcwODNiZDI5NDUyZmNkNzQ1MjgzNzk1YWEwZGJiYzQwYTI4NjViZWUyNmU2YmUzNGUxZjVjNmI0MTI2OWU3ODRjMzc4YjA1YzZiNmUzNSIsImlhdCI6MTY5MzcwOTg1OS4yMjY0NDksIm5iZiI6MTY5MzcwOTg1OS4yMjY0NTIsImV4cCI6MTcyNDgxMzg1OS4xNDkwNzQsInN1YiI6IiIsInNjb3BlcyI6WyJ2aWV3LXVzZXItcHJvZmlsZSIsInZpZXctcHJpdmF0ZS1yZXBvcnRzIl19.sIWgUngb_C525yIQCUPdpMS8f9KxY-5hNFvV7dRaiZdlfekeN1kpIlbpq1UveWy8_BsN6nCiMNZ5zrCsQ0sPkTlN8akg6shN_RkjnDMgmJ_h45-5FgwA2AIzIYJ3FnwW7mI45NplwL1qJDq5MPUYPFNOW4XVeeC0FXSa-3yBLWiBpusnz3SrDzBbXI_YvP2QUVM5dI6XgrD6tS0U_ezWFEgdBocDL-KJcCGrZ6C8AQa7cyKTxt-I3VjKdzIeWFhPDepItgdb5nfOMEA-dG5mUD6NBEujaPhpdF2pueTyvujoUe-Za3hVhkrpXunL0BB4cCbxc0NrqaZhF_r2Hd0EdFLOdZ6JtJ_XdL5tONZ9mByxFpq453SCltHWOUBKCHY1-0WNlyikM9PiuKw9WW5kALsGf2m-py6pykl8fZF-5azD3TJDWwPBRB0meUBGHwcrNtrdW_6-iV8da3VBatUq_Mjk0-DONtM9iVrojVkW9LsAaSQtmtiTrRBkxEZ05208y63Y2ESL_6NyFg0UU2XyYwVIv4nr98j9ezCiQT7aTr7-rfI6dHWhJ1YUQLwOI5FdnVTzio-F7iXAmHcMqZkOttxFp0EvZJxaR5_M3YvGyjInxHLq4xDWN2PtofF6q6seTvxxELTH55-WYNeYyVbAA4u_LTbmp7yrt-OWPh5hJbw',
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
    const response = await fetch('https://www.warcraftlogs.com/api/v2/client', options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    //console.log(data.data.characterData);
    var button = document.getElementById("myButton");
    var outputDiv = document.getElementById("output");
    button.addEventListener("click", outputDiv.innerHTML = "test text");
    return data.data.characterData;
  } catch (error) {
    console.error(error);
  }
};

fetchWarcraftLogsData();
