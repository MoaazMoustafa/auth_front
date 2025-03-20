# Authentication Frontend

A modern React application with authentication features built using Material-UI, React Router, and TypeScript. This application provides a complete authentication flow including login, signup, password reset, and profile management.

## Features

- 🔐 Complete Authentication Flow
  - User Login
  - User Registration
  - Password Reset (Forget Password)
  - Profile Management
- 🎨 Modern UI with Material-UI
- 📱 Responsive Design
- ✅ Form Validation with Yup
- 🔒 Secure Password Requirements
- 🚀 TypeScript Support
- 🛡️ Error Handling
- 📝 Loading States

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd auth_front
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

The application will be available at `http://localhost:3000`

## API Endpoints

The application communicates with the following backend endpoints:

- `POST /users/login` - User login
- `POST /users/signup` - User registration
- `POST /users/forget-password` - Request password reset
- `POST /users/reset-password/:token` - Reset password with token
- `GET /users/profile` - Get user profile (protected route)

## Features in Detail

### Login
- Email and password validation
- Error handling
- Loading states
- Remember me functionality
- Redirect to profile after successful login

### Signup
- Form validation for:
  - Name (minimum 3 characters, letters and spaces only)
  - Email (valid format)
  - Password (minimum 8 characters, uppercase, lowercase, number, special character)
  - Password confirmation
- Real-time validation feedback
- Error handling

### Password Reset
- Two-step process:
  1. Request reset link (ForgetPassword)
  2. Set new password (ResetPassword)
- Email validation
- Secure password requirements
- Token validation
- Automatic redirects

### Profile
- Protected route
- Display user information
- Logout functionality


## Security Features

- Password validation requirements
- Protected routes
- Token-based authentication
- Secure password reset flow
- Form validation
- Error handling

## Acknowledgments

- Material-UI for the component library
- React Router for navigation
- Yup for form validation
- Axios for API requests
