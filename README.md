# Sonali Portfolio

A responsive, dark-themed personal portfolio built with React, Vite, Tailwind CSS v4, and Lucide React.

## 1. Requirements

Install a current LTS version of Node.js from https://nodejs.org/ and Git from https://git-scm.com/.

## 2. Run locally

Open a terminal in the `sonali-portfolio` folder and run:

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

## 3. Add your photo and resume

- Put your portrait at `public/sonali.jpg`. The hero section uses this path and shows a placeholder if the file is missing.
- Put your resume PDF at `public/resume.pdf`. The Download Resume button links to `/resume.pdf`.
- The project does not contain a fabricated portrait or resume. Add your own files.

## 4. Update project links and content

Edit `src/data/projects.js`. Replace `github: ""` and `demo: ""` with actual URLs. Empty links are deliberately not displayed. Edit the other files under `src/data/` to update skills, education, and certifications.

Check the LinkedIn URL in `src/components/Contact.jsx` and `src/components/Footer.jsx` before publishing; use the exact public profile URL you want recruiters to visit. Update contact details in `src/components/Contact.jsx` if needed.

## 5. Contact form behavior

The contact form validates required fields and the email format, then opens the visitor's default email application using a `mailto:` link. It does not claim that a message has been sent. For a fully hosted form, configure EmailJS or a backend and keep any private credentials out of source control.

## 6. Test and build

```bash
npm run build
npm run preview
```

Before publishing, test all navbar/footer anchors, mobile menu, project links, resume download, social links, form validation, and the mobile layout.

## 7. Push to GitHub

Create an empty repository on GitHub, then run these commands in this folder (replace the URL with your repository URL):

```bash
git init
git add .
git commit -m "Build Sonali personal portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Do not commit private API keys or personal files you do not want public.

## 8. Deploy on Vercel

1. Push the project to GitHub.
2. Sign in to https://vercel.com/ and choose **Add New → Project**.
3. Import your portfolio repository.
4. Vercel should detect Vite automatically. Use:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`
5. Click **Deploy**.
6. After deployment, open the live URL and verify the photo, `/resume.pdf`, contact links, and project demos.

No custom rewrite is needed because this is a single-page portfolio without React Router.
