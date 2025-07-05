# GrowthProAI - Mini Local Business Dashboard

This project simulates how small businesses can view their Google ratings, reviews, and AI-generated SEO headlines — one of GrowthProAI's core use cases.

---

## 📦 Project Structure

```
growthproai/
├── backend/    ➔ Node.js + Express backend API
├── frontend/   ➔ React + Tailwind CSS frontend
```

---

# 🚀 Setup Instructions

### ⚙️ Prerequisites

* Node.js & npm installed
* (Optional) Git installed

---

## ✅ 1. Clone the Repository

```bash
git clone https://github.com/Sushanthgoud12/growthproai.git
cd growthproai
```

---

# 🌐 Frontend Setup (React + Tailwind CSS)

```bash
cd frontend
npm install
npm start
```

* Opens app at [http://localhost:3000](http://localhost:3000)
* You can enter a business name & location to simulate Google data
* Regenerate headline feature included

**Live Frontend:** [https://dapper-cat-2293e2.netlify.app/](https://dapper-cat-2293e2.netlify.app/)

---

# 🖁️ Backend Setup (Node.js + Express)

```bash
cd backend
npm install
node index.js
```

* Runs backend at [http://localhost:5000](http://localhost:5000)
* Provides API for:

  * `POST /business-data` ➔ Simulated ratings, reviews, headline
  * `GET /regenerate-headline` ➔ AI-style headline

---

# 🌍 Deployment Notes

* Frontend deployed on **Netlify**: [Live Link](https://dapper-cat-2293e2.netlify.app/)
* Backend can be deployed on **Render**, **Glitch**, etc.
* Update frontend API calls with your live backend URL after deployment

---

# ⚡ Bonus Features Implemented

✅ Responsive design with Tailwind CSS
✅ AI-style headline regeneration
✅ Form validation and error handling
✅ Simulated Google rating & reviews

---

# 🌟 Usage Example

1. Enter:

   * Business Name: `Cake & Co`
   * Location: `Mumbai`
2. Submit ➔ View simulated Google rating & AI SEO headline
3. Regenerate SEO headline anytime

---

# 👨‍💻 Technologies Used

* **Frontend:** React, Tailwind CSS, Axios
* **Backend:** Node.js, Express

---

# 📥 Links

* 📚 GitHub Repo: [https://github.com/Sushanthgoud12/growthproai](https://github.com/Sushanthgoud12/growthproai)
* 🌐 Live Frontend: [Growthproai](https://dapper-cat-2293e2.netlify.app/)

---

# ✅ Final Notes

* No database required — data is simulated
* Designed as part of the GrowthProAI Full Stack Internship Assignment
* Clean code structure and mobile-friendly UI

---
