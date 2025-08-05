# 🎯 My Task List - 

Hi, my name is Abdullah, and this is my Task List Web Application — a full-stack project built using Node.js, Express, MongoDB, and EJS.

The goal of this app is to help users stay organized by allowing them to create custom categories (lists) like Work, Groceries, Gym, etc., and then add tasks under each category.

Each task includes a title, description, and a checkbox to mark it as completed. The app also supports user login, so every user sees only their own tasks and lists.

This project was built to improve my understanding of backend coding, especially working with routes, databases, and views in a real-world app structure.
## ✨ Features

- **User Authentication**: Secure sign-up and login system with session management
- **Bucket List Management**: Create and organize multiple lists of your dreams and goals
- **Task Organization**: Add detailed tasks with descriptions and categories to each list
- **Progress Tracking**: Mark tasks as completed and track your achievements
- **Beautiful UI**: Modern, responsive design with Lottie animations
- **Category System**: Organize tasks by categories for better management
- **User Dashboard**: Personalized home page with welcome message and quick actions

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Frontend**: EJS templating engine, CSS3, HTML5
- **Authentication**: bcrypt for password hashing, express-session for session management
- **Animations**: Lottie animations for enhanced user experience
- **Styling**: Custom CSS with modern design principles

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (local installation or MongoDB Atlas account)
- npm (comes with Node.js)

## 🚀 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd jhhhhhhinuii
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory with the following variables:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   SESSION_SECRET=your_session_secret_key
   PORT=3000
   ```

4. **Database Connection**

   - For local MongoDB: Make sure MongoDB is running on your system
   - For MongoDB Atlas: Use your connection string from Atlas dashboard

5. **Start the application**

   ```bash
   # Development mode (with nodemon)
   npm run dev

   # Production mode
   npm start
   ```

6. **Access the application**
   Open your browser and navigate to `http://localhost:3000`

## 📁 Project Structure

```
jhhhhhhinuii/
├── config/
│   └── db.js                 # Database configuration
├── middleware/
│   ├── isSignedIn.js         # Authentication middleware
│   └── passUserToView.js     # User data middleware
├── models/
│   ├── User.js              # User model
│   ├── list.js              # List model
│   └── task.js              # Task model
├── public/
│   ├── asset/               # Lottie animation files
│   └── *.css               # Stylesheet files
├── routes/
│   ├── auth.routes.js       # Authentication routes
│   ├── list.routes.js       # List management routes
│   └── task.routes.js       # Task management routes
├── views/
│   ├── auth/               # Authentication views
│   ├── list/               # List management views
│   ├── task/               # Task management views
│   └── partials/           # Reusable view components
├── server.js               # Main application file
└── package.json            # Project dependencies
```

## 🎮 Usage

### Getting Started

1. **Sign Up**: Create a new account with a unique username and password
2. **Login**: Access your personalized dashboard
3. **Create Lists**: Start by creating your first bucket list
4. **Add Tasks**: Populate your lists with specific goals and dreams
5. **Track Progress**: Mark tasks as completed as you achieve your goals

### Features Overview

- **Home Dashboard**: Welcome page with quick access to your lists
- **List Management**: Create, edit, and delete bucket lists
- **Task Management**: Add, edit, and mark tasks as completed
- **Category Organization**: Organize tasks by categories
- **User Profile**: Manage your account and view progress

## 🔧 API Endpoints

### Authentication

- `GET /auth/login` - Login page
- `POST /auth/login` - User login
- `GET /auth/sign-up` - Registration page
- `POST /auth/sign-up` - User registration
- `GET /auth/logout` - User logout

### Lists

- `GET /lists` - View all lists
- `GET /lists/new` - Create new list form
- `POST /lists` - Create new list
- `GET /lists/:id/edit` - Edit list form
- `PUT /lists/:id` - Update list
- `DELETE /lists/:id` - Delete list

### Tasks

- `GET /tasks` - View all tasks
- `GET /tasks/new` - Create new task form
- `POST /tasks` - Create new task
- `GET /tasks/:id/edit` - Edit task form
- `PUT /tasks/:id` - Update task
- `DELETE /tasks/:id` - Delete task

## 🎨 Customization

### Styling

The application uses custom CSS files located in the `public/` directory:

- `home.css` - Home page styling
- `login.css` - Authentication pages styling
- `navbar.css` - Navigation component styling
- And more...

### Animations

Lottie animations are stored in `public/asset/` and include:

- Businessman balancing on time unicycle
- Checklist animations
- Login animations
- And more...

## 🔒 Security Features

- Password hashing with bcrypt
- Session-based authentication
- Protected routes with middleware
- Input validation and sanitization
- Secure session management

## 🚀 Deployment

### Local Development

```bash
npm run dev
```

### Production Deployment

1. Set up environment variables for production
2. Configure MongoDB connection for production
3. Set up proper session storage
4. Deploy to your preferred hosting platform (Heroku, Vercel, etc.)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

Created with ❤️ for managing personal dreams and goals.

## 🙏 Acknowledgments

- Lottie animations for beautiful UI elements
- Express.js community for the robust framework
- MongoDB for reliable data storage
- All contributors and users of this application

---

**Start building your dreams today! 🌟**
