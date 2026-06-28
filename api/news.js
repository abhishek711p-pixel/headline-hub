export default async function handler(req, res) {
    const API_KEY = '0fbe00c5c7a0483bbdc5b8dbe22fcfc3';
    const BASE_URL = 'https://newsapi.org/v2';
    
    // We can extract endpoint and query params from the request
    const { endpoint, ...params } = req.query;
    
    if (!endpoint) {
        return res.status(400).json({ status: 'error', message: 'Missing endpoint parameter' });
    }

    try {
        let url = `${BASE_URL}${endpoint}?apiKey=${API_KEY}&language=en`;
        
        for (let key in params) {
            url += `&${key}=${params[key]}`;
        }

        const response = await fetch(url, {
            headers: {
                // NewsAPI requires a User-Agent when requested from a backend
                'User-Agent': 'NewsApp-Vercel-Backend/1.0'
            }
        });
        const data = await response.json();
        
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
}
