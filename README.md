# ⚡ BAJAJ FINSERV

<div align="center"> 
  <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWMxa3dha2FqZDhqeGQ2czk0MjB5M21uN2lyOGM1dzN3ZnY3Nnp1bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L1R1tvI9svkIWwpVYr/giphy.gif" alt="API GIF" width="300" height="300">
</div>

<div align="center"><i>A lightweight Node.js + Express API deployed on Vercel for Fibonacci, Prime, LCM, HCF, and AI-powered queries.</i></div>

---

## ✨ Overview

The **BFHL API** is a backend service built with **Node.js** and **Express**, designed to handle mathematical operations and AI queries. It supports endpoints for Fibonacci sequence generation, prime number filtering, LCM/HCF calculations, and integrates with an AI utility for natural language responses.  

The API is deployed on **Vercel** as a serverless function, ensuring scalability, fast response times, and easy integration with frontend or mobile clients.

---

## 🌟 Features

- **🔢 Math Utilities**
  - Generate Fibonacci sequences
  - Filter prime numbers
  - Calculate LCM and HCF

- **🤖 AI Integration**
  - Ask natural language questions
  - Get instant AI-powered responses

- **🩺 Health Check**
  - `/health` endpoint to verify API uptime

- **⚡ Deployment**
  - Serverless deployment on Vercel
  - No need for manual server management (`app.listen` removed)

---

## 🛠️ Tech Stack

| Category     | Technologies |
|--------------|--------------|
| **Backend**  | Node.js, Express |
| **Utilities**| Custom math functions, AI utility |
| **Deployment** | Vercel (Serverless Functions) |
| **Config**   | dotenv for environment variables |

---

## 📁 Directory Structure

```
BFHL-API/
├── controllers/
│   └── bfhlController.js
├── routes/
│   ├── bfhl.js
│   └── health.js
├── utils/
│   ├── mathUtils.js
│   └── aiUtils.js
├── config/
│   └── default.json
├── index.js
├── vercel.json
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js & npm
- Vercel account for deployment

### Installation
1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/bfhl-api
   cd bfhl-api
    ```
2. **Install Dependencies**
   ```
   npm install
   ```
3. **Configure Environment Variables**
   ```
   GEMINI_API_KEY=your-gemini-api-key
    PORT=3000
   ```
4. **Run Locally**
   ```
   npm start
   ```

---

## 📡 API Endpoints

## 1. Health Check
- **Method:** GET  
- **URL:** `/health`  
- **Response:**
```json
{
  "is_success": true,
  "official_email": "anmol1692.be23@chitkara.edu.in"
}
```
## 2. Fibonacci
- **Method:** GET  
- **URL:** `/bfhl`
- **Body:**
```json
  { "fibonacci": 7 }
```
- **Response:**
```
{
  "is_success": true,
  "official_email": "anmol1692.be23@chitkara.edu.in",
  "data": [0,1,1,2,3,5,8]
}
```
## 3. Prime Filter
- **Method:** GET  
- **URL:** `/bfhl`
- **Body:**
```json
  { "prime": [2,7,11] }
```
- **Response:**
```
{
  "is_success": true,
  "official_email": "anmol1692.be23@chitkara.edu.in",
  "data": [2,7,11]
}
```
## 4. LCM Calculation
- **Method:** GET  
- **URL:** `/bfhl`
- **Body:**
```json
  { "lcm": [4,6,8] }

```
- **Response:**
```
{
  "is_success": true,
  "official_email": "anmol1692.be23@chitkara.edu.in",
  "data": 24
}

```
## 5. HCF Calculation
- **Method:** GET  
- **URL:** `/bfhl`
- **Body:**
```json
{ "hcf": [12,18,24] }

```
- **Response:**
```
{
  "is_success": true,
  "official_email": "anmol1692.be23@chitkara.edu.in",
  "data": 6
}

```
## 6. AI Query
- **Method:** GET  
- **URL:** `/bfhl`
- **Body:**
```json
{ "AI": "What is the capital city of Maharashtra?" }
```
- **Response:**
```
{
  "is_success": true,
  "official_email": "anmol1692.be23@chitkara.edu.in",
  "data": "Mumbai"
}
```
## 7. Error Handling
- **Method:** GET  
- **URL:** `/bfhl`
- **Body:**
```json
{ "wrongKey": 10 }
```
- **Response:**
```
{
  "is_success": false,
  "official_email": "anmol1692.be23@chitkara.edu.in",
  "error": "Invalid input key"
}
```
