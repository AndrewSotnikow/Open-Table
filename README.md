# OpenTable - restaurant booking service (Next.js)

A modern, full-stack project built with **Next.js**, **Prisma**, and **MUI**.

## 🚀 Tech Stack

- **Frontend:** [Next.js](https://nextjs.org/), [React](https://react.dev/), [MUI (Material UI)](https://mui.com/)
- **Backend:** [Prisma](https://www.prisma.io/), [bcrypt](https://www.npmjs.com/package/bcrypt), [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- **Database:** [PostgreSQL](https://www.postgresql.org/) (or any Prisma-supported DB)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/), [Emotion](https://emotion.sh/)
- **Validation & Security:** [Validator.js](https://github.com/validatorjs/validator.js), [JOSE](https://github.com/panva/jose)
- **HTTP Requests:** [Axios](https://axios-http.com/)

## 📦 Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/your-username/opentablenextjs.git
cd opentablenextjs
npm install
```

## ⚡ Getting Started

### 1️⃣ Set up environment variables
Create a `.env` file in the root directory and add:

```env
DATABASE_URL="your_database_url"
JWT_SECRET="your_jwt_secret"
```

### 2️⃣ Run Prisma migrations

```sh
npx prisma migrate dev
```

### 3️⃣ Start the development server

```sh
npm run dev
```

Your OpenTable clone will be available at **http://localhost:3000** 🚀

## 🛠 Available Scripts

| Command          | Description                        |
|-----------------|--------------------------------|
| `npm run dev`   | Start the development server  |
| `npm run build` | Build for production         |
| `npm run start` | Run the production build     |
| `npm run lint`  | Run ESLint                   |
| `npm run prettier` | Format code with Prettier |

## 📌 Features

✔ User authentication (Sign up, Login)  
✔ Restaurant search & booking system  
✔ Responsive UI with MUI & Tailwind  
✔ Secure API with JWT authentication  
✔ Prisma ORM for database management  

---

### 🤝 Contributing

Feel free to fork this repo and submit a pull request! 🚀

---

### 📜 License

This project is **MIT Licensed**.  

