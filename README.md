# 🛠️ Nostalgia Voter - Voting App Template

A simple SvelteKit + Firebase app for running customizable voting rounds. Designed to be minimal, flexible, and quick to deploy.

You control:

- The categories (e.g., shows, games, music, etc.)
- The options within each category
- The voting deadline
- Styling and theming

Use this repo as a base to run your own community polls, nostalgia throwdowns, or fun opinion contests.

---

## ⚙️ Tech Stack

- [SvelteKit](https://kit.svelte.dev/) with TypeScript
- [TailwindCSS](https://tailwindcss.com/)
- [Firebase Firestore](https://firebase.google.com/)
- Deployed via [Vercel](https://vercel.com/)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/nostalgia-voter.git
cd nostalgia-voter
npm install
```

---

### 2. Set Up Firebase

- Go to [Firebase Console](https://console.firebase.google.com/)
- Create a new Firebase project
- Create a Firestore database (start in **test mode**)
- Register a new **Web App** in the Firebase project settings
- Copy your Firebase config keys

Create a `.env` file in the root of your project and add:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

---

### 3. Set Up Your Categories and Options

In `src/routes/+page.svelte`, define your categories and voting options:

```ts
const categories = ['Category1', 'Category2', ...];
const categoryOptions = {
  Category1: ['Option A', 'Option B'],
  Category2: ['Option C', 'Option D'],
  // etc.
};
```

Make sure the Firebase collection names match: `votes_<lowercase-category-name>`

Example: for category `"Movies"`, your Firestore collection will be named `votes_movies`.

Each document in a collection is named after an option and stores a `{ count: number }` field.

---

### 4. Set a Voting Deadline

In `CategoryVote.svelte`, edit the deadline to your desired end time:

```ts
const deadline = new Date("YYYY-MM-DDTHH:MM:SS+TZ"); // Example: 2025-08-01T00:00:00+05:30
```

Voting buttons automatically disable after this time.

---

### 5. Run Locally

```bash
npm run dev
```

---

### 6. Deploy to Vercel

- Push the project to GitHub
- Go to [Vercel](https://vercel.com/) and import your repo
- In the Vercel dashboard, add all Firebase env variables to your project settings
- Build command: (auto-detected)
- Output directory: (auto-detected)
- Deploy 🚀

---

## 🧩 Extend It

- Add more categories or voting modes
- Show live vote counts or charts
- Add animation or confetti on vote
- Run multiple voting events with different collections

---

## 📄 License

MIT — Use it, extend it, remix it.

---

## 👋 Contributions

If you improve this template, feel free to open a PR or suggest ideas.
