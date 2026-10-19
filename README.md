# UGLYCASH app redesign · clickable prototype

**Live demo:** `https://mercy-nubi.github.io/<repo-name>/`

## What's inside

49 screens, all linked together, many of them interactive:

- **Launch & onboarding:** splash, sky splash, 5-slide carousel, welcome
- **Sign-up:** create account, Google prompt, live username check, "about you" questions, Face ID
- **Money:** home with a live yield counter, add funds, withdraw, move money, a working send keypad, receive, verification, phone number entry
- **Card:** the Ugly Visa, Apple Pay, no monthly fee
- **Portfolio & rewards:** portfolio tour, markets with filter chips, rewards, P&L sheet
- **Profile & settings:** profile, insights, photo access, settings with a hide-balance toggle, dark-theme home
- **Social:** feed with likes, chats, create a club, communities tour and trading-club leaderboard

Open `/#/screens` for an overview of every screen. Use the ← / → buttons (or your arrow keys) to step through the flow.

## Run it locally

```bash
npm install
npm run dev
```

## Publish on GitHub Pages

The built site is already in the `docs/` folder.

1. Upload everything in this folder to your repository (including `docs/`).
2. Go to **Settings → Pages** → **Deploy from a branch** → branch **main**, folder **/docs** → **Save**.
3. Open `https://<your-username>.github.io/<repo-name>/` after a minute or two.

If you change the code, run `npm run build` to refresh `docs/`.

## Project structure

```
src/
  App.tsx                 routes for every screen
  components/Phone.tsx    phone frame with in-phone scrolling
  components/Gallery.tsx  overview of all screens
  screens/*.tsx           one TypeScript component per screen (with its own Logic class)
  screens/index.ts        screen list
  lib/logic.ts            small class-based state helper used by the screens
  lib/assets.ts           image helper
public/images/            artwork
docs/                     production build for GitHub Pages
```

## Note
