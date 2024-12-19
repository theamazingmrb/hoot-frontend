# Hoot App

## Description
Hoot App is a social media platform where users can share their thoughts, opinions, and ideas as "hoots." Users can create, edit, and delete their hoots, comment on other users' hoots, and interact with content shared by others. The app is built using a combination of modern web development technologies.

## Features
- **User Authentication**: Secure sign-in and sign-up functionality for user accounts.
- **Hoots Management**:
  - Create new hoots with a title, text, and category.
  - Edit or delete existing hoots (only by the original author).
- **Comments**:
  - Add comments to hoots.
  - Edit or delete comments (only by the original author).
- **Responsive Design**: Designed to work seamlessly on both desktop and mobile devices.
- **Interactive UI**: Dynamic and user-friendly interface with features like loading indicators and icons.

## Technologies Used
### Frontend:
- **React**: For building the user interface.
- **React Router**: For managing navigation between pages.
- **CSS Modules**: For component-scoped styling.

### Backend:
- **Express.js**: For the RESTful API.
- **Mongoose**: For data modeling and database management with MongoDB.

### Database:
- **MongoDB**: For storing hoots, users, and comments.

### Authentication:
- **JWT (JSON Web Tokens)**: For secure user authentication and authorization.

## Installation
1. Clone the repository:
   ```bash
   git clone https://git.generalassemb.ly/SEI-7-08/hoot-front-end
   cd hoot-front-end
   ```

2. Install dependencies for both the frontend and backend:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory for backend variables:
     ```
     VITE_EXPRESS_BACKEND_URL=http://localhost:3000
     ```

4. Start the development servers:
   - Run the frontend server:
     ```bash
     npm start
     ```

## Usage
- Navigate to the app in your browser.
- Sign up or log in to access the full functionality of the app.
- Create, edit, delete, and comment on hoots.

## Folder Structure
### Frontend:
- **Components**: Modular React components for UI.
- **Services**: API service functions to interact with the backend.

### Backend:
- **Routes**: Express routes for hoots and comments.
- **Models**: Mongoose schemas for Hoots and Users.
- **Middleware**: Token verification and authentication.

## Future Enhancements
- Add likes and reactions to hoots and comments.
- Implement a follow system to subscribe to specific users' hoots.
- Enhance UI with animations and additional themes.
- Integrate a real-time feature for live comments.
 

