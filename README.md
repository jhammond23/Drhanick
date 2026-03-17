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
