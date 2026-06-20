# NewsPulse 📰

NewsPulse is a dynamic, responsive news aggregator web application built with HTML, CSS, and Vanilla JavaScript. It leverages the [NewsAPI](https://newsapi.org/) to deliver the latest headlines and articles across various categories directly to the user.

## ✨ Features

- **Latest Headlines**: View top trending news stories by default.
- **Categorized News**: Quickly filter news by topics such as Business, Technology, Sports, Entertainment, Health, and Science.
- **Search Functionality**: Search for specific news articles or topics.
- **Search History**: Automatically saves your recent searches using `localStorage` for quick access. 
- **Responsive Design**: A clean, modern UI (incorporating Google Fonts) that adapts to different screen sizes.
- **Error & Loading States**: Smooth user experience with built-in loading spinners and error handling for failed API requests or empty search results.

## 🚀 Technologies Used

- **HTML5**: Semantic markup for structuring the application.
- **CSS3**: Custom styling, flexbox/grid layouts, and responsive design.
- **JavaScript (ES6+)**: 
  - Asynchronous operations (`async/await`, `fetch` API) to communicate with NewsAPI.
  - DOM manipulation for rendering news cards and handling UI states.
  - `localStorage` for persisting search history.

## 📂 Project Structure

```text
NEWS FEED TASK-4/
├── index.html        # Main HTML layout
├── css/
│   └── styles.css    # Application styling
├── js/
│   ├── api.js        # Handles NewsAPI fetch requests
│   ├── app.js        # Core logic, event listeners, and history management
│   ├── config.js     # API key and base URL configuration
│   └── ui.js         # UI manipulation and rendering logic
└── README.md         # Project documentation
```

## 🛠️ Setup & Installation

1. **Clone or Download the Repository**:
   Download the project files to your local machine.
2. **Get a NewsAPI Key**:
   - Visit [NewsAPI.org](https://newsapi.org/) and register for a free API key.
3. **Configure the API Key**:
   - You need a `js/config.js` file for the API integration. If it's missing or you cloned a fresh copy, create `js/config.js` and add:
     ```javascript
     const API_KEY = 'YOUR_NEWS_API_KEY_HERE';
     const BASE_URL = 'https://newsapi.org/v2';
     ```
4. **Run the Application**:
   Simply open `index.html` in any modern web browser, or use an extension like Live Server in VS Code, to start reading the news.

## 💡 How it Works

- The app initializes by fetching the "General" top headlines.
- Users can switch categories using the top navigation bar, triggering a new API call to fetch category-specific news.
- The search bar allows users to query specific terms. Recent queries are saved in the browser's `localStorage` and displayed in a dropdown when the search input is focused.
- All fetched data is dynamically rendered as HTML cards with fallback images for articles missing media.

## 📝 About

This project was created as an educational task to demonstrate API integration, asynchronous JavaScript, and dynamic DOM manipulation.
