# Emergency Department On-Call Board

Pages
- `index.html`   home page with the display link and one edit link per specialty (Copy link buttons)
- `display.html` TV screen (all 9 specialties, live, changes over at 07:00)
- `edit.html?s=medicine` (and surgery, paediatrics, gynaecology, ophthalmology, ent, dental, nephrology, psychiatry)

## Setup (about 10 minutes, free)

### 1. Create the Firebase database
1. Go to https://console.firebase.google.com and click **Add project** (name it e.g. `ed-oncall`; Analytics can be off).
2. On the project home click the web icon `</>` (**Add app**), give it any name, click **Register app**.
3. Copy the values inside `firebaseConfig` and paste them into **firebase-config.js** (replace every PASTE_... value).
4. Left menu **Build > Firestore Database > Create database**. Choose **Production mode** and a region near you.
5. Open the **Rules** tab, replace everything with the content of **firestore.rules**, click **Publish**.
   (Do not use "test mode": it stops working after 30 days.)

### 2. Put the pages online with GitHub Pages
1. On https://github.com create a **New repository** (Public), e.g. `ed-oncall`.
2. Click **uploading an existing file**, drag in ALL files of this folder, click **Commit changes**.
3. **Settings > Pages**: Source = **Deploy from a branch**, Branch = **main**, folder = **/ (root)**, **Save**.
4. After a minute the site is live at `https://YOUR-USER.github.io/ed-oncall/`.

### 3. First use
1. Open the site, copy each specialty’s link from the home page and send it to that specialty.
2. Each specialty: **Doctors** tab (add names and phones, optional duty number), then **Rota** tab (pick 1st and 2nd on call per day), then **Save changes**.
3. TV: open `https://YOUR-USER.github.io/ed-oncall/display.html` in the TV browser and press F11 for full screen. It updates by itself.

## Notes
- The on-call day runs 07:00 to 07:00 (change `DUTY_DAY_STARTS_AT` in shared.js if needed).
- Links are open by design: anyone who has a link can edit that rota, and the display page is readable by anyone who has its address.
- Firebase’s free plan is far more than this needs.
