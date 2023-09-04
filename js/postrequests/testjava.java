package gitpagetest.js.postrequests;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class testjava {
    public static void main(String[] args) throws IOException, InterruptedException{
        HttpRequest request = HttpRequest.newBuilder()
        .uri(URI.create("https://www.warcraftlogs.com/api/v2/client"))
        .header("Content-Type", "application/json")
        .header("grant_type", "client_credentials")
        .header("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5YTBhYTQ2OS0yYzYzLTQ0OTEtYjc2Ny0zMzU0ZWJhMWJkNzkiLCJqdGkiOiIzZjcwODNiZDI5NDUyZmNkNzQ1MjgzNzk1YWEwZGJiYzQwYTI4NjViZWUyNmU2YmUzNGUxZjVjNmI0MTI2OWU3ODRjMzc4YjA1YzZiNmUzNSIsImlhdCI6MTY5MzcwOTg1OS4yMjY0NDksIm5iZiI6MTY5MzcwOTg1OS4yMjY0NTIsImV4cCI6MTcyNDgxMzg1OS4xNDkwNzQsInN1YiI6IiIsInNjb3BlcyI6WyJ2aWV3LXVzZXItcHJvZmlsZSIsInZpZXctcHJpdmF0ZS1yZXBvcnRzIl19.sIWgUngb_C525yIQCUPdpMS8f9KxY-5hNFvV7dRaiZdlfekeN1kpIlbpq1UveWy8_BsN6nCiMNZ5zrCsQ0sPkTlN8akg6shN_RkjnDMgmJ_h45-5FgwA2AIzIYJ3FnwW7mI45NplwL1qJDq5MPUYPFNOW4XVeeC0FXSa-3yBLWiBpusnz3SrDzBbXI_YvP2QUVM5dI6XgrD6tS0U_ezWFEgdBocDL-KJcCGrZ6C8AQa7cyKTxt-I3VjKdzIeWFhPDepItgdb5nfOMEA-dG5mUD6NBEujaPhpdF2pueTyvujoUe-Za3hVhkrpXunL0BB4cCbxc0NrqaZhF_r2Hd0EdFLOdZ6JtJ_XdL5tONZ9mByxFpq453SCltHWOUBKCHY1-0WNlyikM9PiuKw9WW5kALsGf2m-py6pykl8fZF-5azD3TJDWwPBRB0meUBGHwcrNtrdW_6-iV8da3VBatUq_Mjk0-DONtM9iVrojVkW9LsAaSQtmtiTrRBkxEZ05208y63Y2ESL_6NyFg0UU2XyYwVIv4nr98j9ezCiQT7aTr7-rfI6dHWhJ1YUQLwOI5FdnVTzio-F7iXAmHcMqZkOttxFp0EvZJxaR5_M3YvGyjInxHLq4xDWN2PtofF6q6seTvxxELTH55-WYNeYyVbAA4u_LTbmp7yrt-OWPh5hJbw")
        .method("POST", HttpRequest.BodyPublishers.ofString("{\"query\":\"query {\\n\\tcharacterData {\\n\\t\\tcharacter(name: \\\"Sci\\\", serverSlug: \\\"Area-52\\\", serverRegion: \\\"US\\\") {\\n\\t\\t\\tlevel\\n\\t\\t\\tclassID\\n\\t\\t\\tname\\n\\t\\t}\\n\\t}\\n\\treportData {\\n\\t\\treport(code: \\\"anwc8HgYMQmy24Rp\\\") {\\n\\t\\t\\tcode\\n\\t\\t\\tfights(fightIDs: [5]) {\\n\\t\\t\\t\\tdifficulty\\n\\t\\t\\t\\taverageItemLevel\\n\\t\\t\\t}\\n\\t\\t\\tmasterData {\\n\\t\\t\\t\\tgameVersion\\n\\t\\t\\t\\tlogVersion\\n\\t\\t\\t\\tactors {\\n\\t\\t\\t\\t\\tname\\n\\t\\t\\t\\t\\ttype\\n\\t\\t\\t\\t}\\n\\t\\t\\t\\tabilities {\\n\\t\\t\\t\\t\\ticon\\n\\t\\t\\t\\t\\tname\\n\\t\\t\\t\\t\\ttype\\n\\t\\t\\t\\t}\\n\\t\\t\\t}\\n\\t\\t}\\n\\t}\\n}\\n\"}"))
        .build();
        HttpClient httpClient = HttpClient.newHttpClient();
        HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());

        // Print the full HTTP response, including status code and headers
        System.out.println("Response Code: " + response.statusCode());
        System.out.println("Response Headers: " + response.headers());
        System.out.println("Response Body: " + response.body());
    }

    
}
