# Dr. Hanick Website

This project is a React-based website for Dr. Hanick. It was originally bootstrapped with Create React App and is deployed through Firebase Hosting.

## Project Overview

This site is a front-end React application that is built into a static production bundle and hosted on Firebase.

Current setup:
- React app created with Create React App
- Production build output to the `build` folder
- Firebase Hosting
- Firebase project name: `MO-ENT`
- Custom domain connected through Squarespace DNS
- GitHub repository for version control and developer handoff

## Tech Stack

- React
- Create React App
- Firebase Hosting
- GitHub

## Local Development

From the project folder, install dependencies:

```bash
npm install
```

Start the development server:

npm start

Then open:

http://localhost:3000

The page will automatically reload as changes are made.

Production Build

To create a production build:

npm run build

This outputs the finished site into the build folder.

Deployment

This project is deployed using Firebase Hosting under the Firebase project:

MO-ENT

Deploy updated changes

Make your code changes

Build the project:

npm run build

Deploy to Firebase:

firebase deploy --only hosting

If needed, a full deploy can also be run with:

firebase deploy
Firebase Notes

Hosting is managed in the Firebase project MO-ENT

The site has already been deployed successfully through Firebase Hosting

If the site temporarily shows Not secure right after domain setup, that usually means the secure certificate is still finishing in Firebase

This can take anywhere from a few minutes to several hours, and in some cases up to 24 hours

Custom Domain Setup

The custom domain is connected through Squarespace and verified through Firebase Hosting.

If the domain ever needs to be reconnected, add these records inside Squarespace DNS settings for the root domain:

A record

Type: A

Name/Host: @

Value / Points to: 199.36.158.100

TXT record

Type: TXT

Name/Host: @

Value: hosting-site=mo-ent

Important notes:

Do not delete existing Squarespace or Google records unless there is a specific reason

If Squarespace does not accept @ in the name field, leave that field blank instead

After saving the records, go back to Firebase and click Verify

DNS and secure certificate setup may take time to finish

GitHub Setup

This project is tracked in GitHub for version control and future handoff.

Standard workflow
git add .
git commit -m 'Describe your changes'
git push
If the GitHub remote is already set but SSH fails

If you see a Permission denied (publickey) error, switch the remote from SSH to HTTPS:

git remote set-url origin https://github.com/jhammond23/Drhanick.git
git push -u origin main
Recommended .gitignore Update

Firebase creates cache files that usually should not be committed.

Add this to .gitignore if it is not already there:

.firebase/
Notes for Future Developers

Always run npm run build before deploying

Firebase serves the built files from the build folder

Domain DNS changes are handled in Squarespace, not in the React codebase

If the live domain is not updating, confirm both:

the latest build was deployed to Firebase

the DNS records in Squarespace are correct

If the domain loads but says Not secure, give Firebase more time to finish the secure certificate

Avoid editing or deleting unrelated DNS records in Squarespace

Available Scripts
npm start

Runs the app locally in development mode.

npm run build

Creates the production build in the build folder.

npm test

Runs the test watcher.

npm run eject

Do not use unless absolutely necessary.

This permanently exposes the build configuration and cannot be undone.

Access Needed for Maintenance or Handoff

Future developers may need access to:

the GitHub repository

the Firebase project MO-ENT

the Squarespace domain settings for drhanick.com

Before handoff, make sure the next developer or client has the correct access to all three.


## Search and static page publishing

The primary canonical host is https://drhanick.com. Firebase project ID is
\`mo-ent\`; the existing secondary host is https://mo-ent.web.app. The GitHub
source repository is https://github.com/jhammond23/Drhanick.

\`npm run build\` runs the existing Create React App build, then
\`scripts/prerender.cjs\` renders all ten existing routes into complete HTML.
React hydrates these pages and updates their titles, descriptions, canonical
links, social metadata and JSON-LD during navigation. Firebase serves clean
URLs, removes trailing slashes and returns the generated HTTP 404 page for
unknown paths. There is no catch-all rewrite to the homepage.

Seven public content pages are in the generated sitemap. The developer and
two existing form routes use \`noindex, follow\` and are excluded from it.
The procedure and gallery pages use \`noimageindex\` while allowing their text
to be indexed. Existing photo contents and gallery reveal behavior are
preserved; no review/rating or patient-case structured data is generated.

Business/physician facts are grounded in existing visible content and checked
against https://www.moentcenter.com/office/,
https://www.moentcenter.com/andrea-l-hanick-md/ and
https://www.aafprs.org/profile?id=337655. Existing clinical wording and
treatment claims require the practice's own clinical review; this change does
not add outcome, insurance, age or experience claims. The prior removal of the
hero email link is preserved; the existing phone link and email elsewhere
remain.

Validation on Jakes-PC:

\`\`\`powershell
npm run lint
$env:CI = 'true'
npm test -- --watchAll=false --runInBand
npm run build
firebase emulators:start --only hosting --project mo-ent
# In another terminal:
node scripts/verify-site.cjs http://127.0.0.1:5082
\`\`\`

The browser verification script uses installed Google Chrome. It checks all
routes at desktop, mobile and 320-pixel widths, navigation, live metadata,
gallery initial locking, unchanged hero contacts, robots/sitemap, no-JavaScript
content and real HTTP 404 behavior. It submits no forms and captures no
patient-gallery screenshots. Procedure-header images and backgrounds are
masked in saved layout evidence.

Commit reviewed source changes before the final production build so that
\`build/release.json\` identifies the exact source commit. Deploy using the
existing authenticated flow:

\`\`\`powershell
npm run build
firebase deploy --only hosting --project mo-ent
node scripts/verify-site.cjs https://drhanick.com
\`\`\`

Check \`release.json\` and public HTML/JS/CSS hashes against the local build after
deployment. Check canonical URLs on the Firebase alias as well. The www host
did not resolve on 2026-10-02 and requires separate DNS/hosting configuration
if the owner wants that alias.

The implementation follows Google Search's SEO Starter Guide, JavaScript SEO,
crawlable-link, sitemap and AI-features guidance and Schema.org's
IndividualPhysician and MedicalClinic definitions. There is no special AI
schema or llms.txt requirement. Deployment confirms the published technical
changes; indexing, rankings, AI inclusion and Search Console/Bing account
settings require separate verification.

The existing physician-only reception background has a separate optimized derivative (1920 × 1282, 159,187 bytes versus 1,751,797 original bytes, 90.9% smaller). Original source photographs and patient/gallery images remain unchanged. Google map background requests are allowed during browser checks; only form-submission POSTs are blocked, and the contact iframe must render map attribution without a place-info error.
An unused legacy CSS background reference was removed after confirming zero matching nodes in every generated route and zero source-component references; its original photograph is retained.
