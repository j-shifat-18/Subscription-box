# 📦 Subscription Box Service Platform

Welcome to the **Subscription Box** — a React-based single-page application that allows users to explore, subscribe to, and manage curated subscription boxes tailored to their interests.

---

## 🔗 Live URL

👉 [Live Site](https://subscription-box-d05fc.web.app/)  

---

## 🎯 Project Purpose

This project was built as part of an assignment to practice full-stack integration, user authentication, protected routes, dynamic routing, and a personalized user experience. It simulates a real-world subscription box platform with user interaction, reviews, and wishlist functionality.

---

## 🚀 Key Features

- 🔐 **Authentication:**
  - Login/Register with Email & Password
  - Google OAuth
  - Forgot Password functionality (email-based reset)

- 🧭 **Routing & Navigation:**
  - React Router v6.14 with `createBrowserRouter`
  - Private Routes (e.g., Profile, Wishlist, Subscription Details)
  - 404 Error Page

- 🖼️ **Home Page Sections:**
  - Dynamic Hero Slider (Swiper.js)
  - Subscription Services (cards rendered from JSON)
  - Extra informative sections (e.g., support local)

- 📝 **Subscription Box Details Page:**
  - Protected route
  - Shows full details of a subscription box
  - Add Review and Rating (1-5 stars)

- 💖 **Wishlist:**
  - Add/remove boxes to wishlist
  - Dedicated Wishlist Page (protected route)
  - Displays message when wishlist is empty

- 👤 **My Profile Page:**
  - View and update user name and photo using Firebase `updateProfile()`

- 🎨 **Dynamic Page Titles:**
  - Titles change per route using `react-helmet` or `react-helmet-async`

- ⚙️ **Environment Variables:**
  - Firebase configuration keys stored securely in `.env` file

- 📱 **Responsive Design:**
  - Fully responsive on mobile, tablet, and desktop

---

## 📦 Data Handling

- Subscription data is loaded from a local `subscriptionData.json` file hosted in the `public/` folder
- Images are hosted on [https://imgbb.com/](https://imgbb.com/)

---

## 🧩 NPM Packages Used

| Package               | Purpose                                |
|------------------------|----------------------------------------|
| `react-router-dom`     | Routing and protected routes           |
| `firebase`             | Authentication (email/password, Google) |
| `react-toastify`       | Toast notifications (login, errors)    |
| `swiper`               | Hero slider                            |
| `react-helmet` / `react-helmet-async` | Dynamic document title updates     |
| `tailwindcss` + `daisyui` | Styling and prebuilt UI components  |

---

