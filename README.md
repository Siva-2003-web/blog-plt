# Blog App MERN

This is a full-stack blog application built with MongoDB, Express, React, and Node.js.

## Prerequisites

- Node.js and npm installed
- MongoDB installed and running locally

## Setup Instructions

### 1. Clone the repository

```
git clone <your-repo-url>
cd Blog-App-Mern-main
```

### 2. Install dependencies

#### Server

```
cd server
npm install
```

#### Client

```
cd ../client
npm install
```

### 3. Environment Variables

#### Server

Create a `.env` file in the `server` folder:

```
MONGODB_URI=mongodb://localhost:27017/blogapp
JWT_SECRET=your_secret_key
```

#### Client

Create a `.env` file in the `client` folder:

```
REACT_APP_BASE_URL=http://localhost:5000
```

### 4. Start MongoDB

Make sure MongoDB is running locally on port 27017.

### 5. Start the servers

#### Server

```
cd server
npm start
```

#### Client

```
cd ../client
npm start
```

### 6. Access the app

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:5000](http://localhost:5000)

## Usage

- Register a new user and log in.
- Create, edit, and view blogs.
- Bookmark and comment on blogs.

## Troubleshooting

- Ensure MongoDB is running locally.
- Check `.env` files for correct configuration.
- If you encounter issues, check the terminal for error messages.

---

Made with MERN stack.
