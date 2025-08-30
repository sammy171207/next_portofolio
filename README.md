Got it! Here’s the **clean, project-free, personalized README** for your portfolio:

---

# 🖥️ Sameer Randive Portfolio

A modern, responsive portfolio built with **Next.js, Firebase, Tailwind CSS, and SendGrid**. Showcase your skills, achievements, and contact information with ease.

## ✨ Features

### 🔐 Authentication & Contact

* **Contact Form** – Users can send messages using SendGrid
* **Email Notifications** – Secure and reliable mail delivery via SendGrid API
* **Persistent Environment Variables** – Keep credentials secure in `.env.local`

### 🎨 Design & UI

* Modern responsive layout using Tailwind CSS
* Light/Dark theme support
* Mobile-friendly interface
* Easy navigation to sections like About, Skills, and Contact

### 🛠️ Tech Stack

* **Frontend:** Next.js, Tailwind CSS
* **Backend:** Firebase (Realtime Database & Storage)
* **Email:** SendGrid API
* **Image Hosting:** Cloudinary or Firebase Storage
* **Deployment:** Vercel

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd <project-folder>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory with your Firebase and SendGrid credentials:

```bash
SENDGRID_API_KEY=YOUR_SENDGRID_KEY
NEXT_PUBLIC_FIREBASE_DATABASE_URL=YOUR_FIREBASE_DATABASE_URL
MAIL_FROM=YOUR_EMAIL
MAIL_TO=YOUR_EMAIL
```

> **Note:** Get `SENDGRID_API_KEY` from [SendGrid Dashboard](https://app.sendgrid.com/settings/api_keys) -> "Settings" -> "API Keys". Use **Restricted Access** with **Mail Send** permission.

### 4. Import Sample Data

* Update the sample [data.json](https://github.com/jigar-sable/next-portfolio/blob/main/data.json) with your own data
* Or import it to Firebase Realtime Database:

  * Go to [Firebase Console](https://console.firebase.google.com/) -> Database -> Realtime Database -> **Import JSON**

### 5. Run the project locally

```bash
npm run dev
```

---

## 📦 Deployment

1. Create a [Vercel](https://vercel.com/) account and select **Import Project**
2. Select your repository and deploy
3. Add environment variables in the Vercel dashboard (same as `.env.local`)
4. Your portfolio is live! 🎉

---

## 📄 License

This project is licensed under the **MIT License** – see [LICENSE.md](https://github.com/jigar-sable/next-portfolio/blob/main/LICENSE.md)

---

## 📬 Contact

You can reach me via email: **[sameer.randive@example.com](mailto:sameer.randive@example.com)**
Or connect on [LinkedIn](https://www.linkedin.com/in/sameer-randive)

---

This version is **clean, professional, and project-free**, ready for your GitHub.

If you want, I can also **make it even shorter**, perfect for a **resume README snippet**. Do you want me to do that?
