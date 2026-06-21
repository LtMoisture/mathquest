# MathQuest — offline PWA

A self-contained maths game that installs to the iPad home screen and runs fully
offline (no wifi needed once installed). Progress (XP, coins, badges) is saved on
the device.

## Files
- `index.html` — the whole game (with PWA + service-worker hooks added)
- `manifest.webmanifest` — app name, colours, icons
- `sw.js` — service worker (caches everything for offline use)
- `icons/` — the shiba-on-a-rocket app icons
- `.nojekyll` — tells GitHub Pages to serve the files as-is

---

## 1. Put it on GitHub Pages

1. On github.com, click **New repository**. Name it e.g. `mathquest`.
   Set it to **Public** (free GitHub Pages needs a public repo).
2. On the new repo page, click **Add file → Upload files**.
3. Drag in **everything inside this folder** — `index.html`,
   `manifest.webmanifest`, `sw.js`, `.nojekyll`, and the whole `icons` folder.
   (Keep `icons` as a folder; the paths matter.)
4. Click **Commit changes**.
5. Go to **Settings → Pages**. Under *Build and deployment → Source*, choose
   **Deploy from a branch**, branch **main**, folder **/ (root)**, and **Save**.
6. Wait ~1 minute, then refresh. Pages shows your live URL:
   `https://YOUR-USERNAME.github.io/mathquest/`

All paths inside the app are relative, so it works correctly under that
`/mathquest/` sub-path. GitHub Pages serves over HTTPS, which the offline
service worker requires.

## 2. Install it on the iPad 7

1. Open the URL above in **Safari** (must be Safari, not Chrome).
2. Let it load fully **once while online** — this lets the service worker cache
   the game for offline use.
3. Tap the **Share** button → **Add to Home Screen** → **Add**.
4. You'll get the shiba-rocket icon on the home screen. It launches full-screen
   like a real app, with no Safari toolbars.

## 3. Confirm it works offline

Turn on **Airplane Mode**, then launch MathQuest from the home-screen icon.
It should open and play normally. (If it ever doesn't, just open it once more
with wifi on to refresh the cache.)

## 4. Lock it down for a child (optional but recommended)

Use **Guided Access** to pin the iPad to just this app so they can't exit,
delete it, or wander into Safari:

- **Settings → Accessibility → Guided Access** → turn **On**, set a passcode.
- Open MathQuest, then **triple-click the Home button** → **Start**.
- Triple-click + passcode to end the session.

---

## Updating the game later

When you upload a new `index.html`:
1. Open `sw.js` and bump the cache name (`mathquest-v1` → `mathquest-v2`, etc.).
2. Upload both the new `index.html` and the new `sw.js`.

The version bump makes installed iPads pull the new version on the next launch
instead of serving the old cached copy.
