PHASE 1 - Passed data between .then() calls by returning it. In first .then() check if the response is ok and return response.json(). Whatver is returned gets handed off to the next.then() as its parameters named data.

PHASE 2 - A promise means data that isnt ready yet. WHen fetch() is called it takes time for the server to response so that will either succeed with data or fail. API being down it fails or if URL is wrong you get an error response. .catch() instead of crashing the program logs the message.

PHASE 3 - Fetching to update only part of the page makes it faster by instead of redownloading the whole page, the data is requested and only the result container changes.