# URL Shortener Backend

## Description

This is the backend service for the URL Shortener application built using Node.js, Express, and MongoDB. It provides APIs to create short URLs, fetch all URLs, and handle redirection with click tracking.

---

## 🚀 Features

* Create short URLs from long URLs
* Unique short code generation using nanoid
* Redirect to original URL
* Track click count and click history
* Input validation using validator

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* nanoid
* validator

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Abhis1605/url-backend
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Create `.env` file

```env
PORT=5000
MONGO_URI=your_mongodb_connection
BASE_URL=http://localhost:5000
```

---

### 4️⃣ Run Server

```bash
npm run dev
```

---

## 🌐 API Endpoints

### 🔹 Create Short URL

POST `/api/shorten`

### 🔹 Get All URLs

GET `/api/urls`

### 🔹 Redirect

GET `/:code`

---

## 📂 Project Structure

```
src/
├── controllers/
├── models/
├── routes/
├── middleware/
├── utils/
├── app.js
├── server.js
```

---
