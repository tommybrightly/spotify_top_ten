# 🎧 Spotify Top 10

A modern Angular app that authenticates users via Spotify and displays their top 10 most played tracks, complete with album art and preview buttons.

> Built to showcase full-stack knowledge, API integration, authentication flow with PKCE, and responsive Tailwind styling. 

---

## 🔥 Features

- 🔐 OAuth 2.0 Authorization Code Flow with PKCE (Spotify-recommended)
- 🎵 Displays user’s top 10 most played songs
- 🖼 Album art and artist name shown for each track
- 🌙 Fully responsive design using Tailwind CSS

---

## 🚀 Demo

![App Screenshot](insert-screenshot-link-here)

> (You can add a GIF using [LICEcap](https://www.cockos.com/licecap/) or a screen capture tool)

---

## 🛠 Tech Stack

- [Angular 17](https://angular.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Spotify Web API](https://developer.spotify.com/documentation/web-api/)
- TypeScript
- RxJS
- Github

---

## 📦 Installation

1. **Clone the repo**

```bash
git clone https://github.com/yourusername/spotify_top_ten.git
cd spotify_top_ten
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up your environment variables**

Create a file named `.env` in the root and add:

```bash
SPOTIFY_CLIENT_ID=your_spotify_client_id
REDIRECT_URI=http://127.0.0.1:4200/callback
```

(If you're not using `.env`, modify `environment.ts` directly.)

4. **Run the app**

```bash
ng serve --host http://127.0.0.1:4200
```

Then visit `http://127.0.0.1:4200`

---

## 📝 Notes - IMPORTANT

- You must register yourself as a developer with Spotify: https://developer.spotify.com/dashboard/applications
- Add `http://127.0.0.1:4200/callback` to your app’s allowed redirect URIs
- Add your email to the allowed users section of User Management


---

## 🧠 What I Learned

- How to implement PKCE securely in a frontend-only SPA
- Using Angular standalone components and routing
- Styling with Tailwind for responsive, fast design
- Parsing and displaying real-time API data
- Managing state across OAuth redirects using localStorage
- Practiced professional version control with Git and GitHub, including branching strategies, pull requests, and merge conflict resolution


