# FINAL BIRTHDAY SURPRISE WEBSITE

This folder is ready for static hosting.

## FILES
- index.html      -> the whole website
- style.css       -> design / responsive layout / animations
- script.js       -> password + birthday + interactions
- qr.html         -> QR page after you upload the site
- manifest.json   -> mobile/PWA metadata
- assets/         -> your photos, song and video

## 1) SET THE PASSWORD
The website uses the birthday itself as the ONLY password.

Current password:
1102005

Open script.js if you want to change it:
const SECRET_PASSWORD = "1102005";

## 2) ADD YOUR PHOTOS
Put these files in assets:
photo1.jpg
photo2.jpg
photo3.jpg
photo4.jpg
photo5.jpg
photo6.jpg
photo7.jpg
photo8.jpg
photo9.jpg

Recommended:
- JPG or PNG
- 800px+ on the long side
- vertical photos work especially well

## 3) ADD YOUR VIDEO
Put your video here:
assets/video.mp4

## 4) ADD YOUR SONG
Put your song here:
assets/song.mp3

Browsers usually do NOT allow music to start automatically before a user interaction.
The site therefore starts the song from the Play button.

## 5) CHANGE TEXT
Open index.html.
Search for:
TEXT HERE
Dear Love,
Our song
Your memories text
and replace them with your own wording.

## 6) TEST ON YOUR COMPUTER
Use Visual Studio Code + Live Server:
Right-click index.html -> Open with Live Server.

## 7) UPLOAD
Upload the CONTENTS of this folder to a static host such as:
- GitHub Pages
- Netlify
- Vercel

Do not upload the ZIP itself as the website.

## 8) QR CODE
After the site is online, open:
YOUR-LINK/qr.html

It will generate a QR code for your website link.
You can print/save it and send it.

## IMPORTANT ABOUT THE PASSWORD
This is a cute private surprise, not real security.
The password is stored in JavaScript, so someone with developer tools can technically inspect it.
For a real secure login, use server-side authentication.

## MOBILE
The layout is responsive for phone, tablet and laptop screens.
