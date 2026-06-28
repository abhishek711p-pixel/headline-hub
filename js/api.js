// Function to fetch news from NewsAPI
async function fetchNewsData(endpoint, params) {
    try {
        let url;
        const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
        
        if (isLocalhost) {
            url = `${BASE_URL}${endpoint}?apiKey=${API_KEY}&language=en`;
        } else {
            url = `/api/news?endpoint=${endpoint}`;
        }
        
        // Add extra parameters like category or search query
        for (let key in params) {
            url += `&${key}=${params[key]}`;
        }


        const response = await fetch(url);
        const data = await response.json();

        if (data.status === 'error') {
            throw new Error(data.message);
        }

        return data.articles;
    } catch (err) {
        console.error("News Fetch Error: ", err);
        throw err; // Pass the error to the UI to handle
    }
}
