# 📽️ Dashboard Media App

A full-featured media dashboard that allows users to explore trending movies, news, and curated content. Built using **Next.js**, **Redux Toolkit**, **Tailwind CSS**, and integrated with **TMDB API** and **NewsData API**.

---

## 🚀 Live Demo

🌐 [View Live Deployment](https://personalized-dashboard-sigma.vercel.app/)

---

## 🛠️ Features

- 🔥 Trending Section:
  - Movies (from TMDB)
  - News (from NewsData.io)
  - Posts (static or extendable)
- 📚 Categories & Filters
  - News filtered by user-selected categories
- 🌗 Dark Mode
  - Fully responsive theme toggle using Redux state
- 💾 Favorites
  - Add/remove favorite movies and news
- 📥 Search with Debounce
  - Fast and smooth movie search experience
- 🔁 Pagination
  - Movies: page-based
  - News: next-page based
- ⚙️ Settings
  - Choose preferred news categories

---

## 📦 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **State Management:** Redux Toolkit
- **Styling:** Tailwind CSS (with custom dark mode)
- **APIs:**
  - [TMDB](https://www.themoviedb.org/documentation/api)
  - [NewsData.io](https://newsdata.io/docs)

---

## 🔧 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Biswadip125/Personalized_Dashboard.git
   cd media-dashboard
   ```

2.Install dependencies
  ```bash
  npm install
  ```
3. Add Environment Variables
Create a .env.local file:
  ````bash
  TMDB_API_KEY=your_tmdb_api_key
  NEWSDATA_API_KEY=your_newsdata_api_key
  ````
4. Run the development server
  ```bash
  npm run dev
  ```
5. Folder Structure (Simplified)
  ```bash
  /app
    /components
    /lib
      /store
  /public
  /styles
  ````
6.  Future Enhancements
• User authentication (NextAuth)
• Save user preferences to database
• More content types (TV, Podcasts, etc.)
• Improved accessibility and animations

📜 License
• This project is licensed under the MIT License.

🙌 Acknowledgments
• TMDB API

• NewsData.io API

• Tailwind CSS
