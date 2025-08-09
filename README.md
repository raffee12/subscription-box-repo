# Subscription Box Service Platform



## Project Overview

The Subscription Box Service Platform is designed to provide users with a personalized experience to browse, subscribe to, and manage monthly subscription boxes tailored to their interests. This platform enables customers to discover curated subscription boxes filled with items matching their preferences, making each month a new and exciting experience.

---

## Key Features

- **User Authentication:** Email/password and Google sign-in via Firebase Authentication.
- **Forget Password:** Fully functional password reset via email.
- **Protected Routes:** Subscription details and profile pages are accessible only after login.
- **Subscription Services:** Browse through a curated list of subscription boxes with dynamic data loaded from JSON.
- **Reviews & Ratings:** Users can submit reviews and rate subscription services (1 to 5 stars).
- **Responsive Design:** Fully responsive across mobile, tablet, and desktop devices.
- **Dynamic Page Titles:** Page titles update dynamically based on the current route.
- **User Profile Management:** Users can update their display name and photo URL.
- **Toasts & Alerts:** Success and error messages shown via toast notifications and SweetAlert.
- **Extra Private Route:** An additional protected route with meaningful content.
- **Unique Design:** Custom styling with Tailwind CSS and DaisyUI.
- **Animations:** Implemented using Swiper slider and/or AOS animation for interactive UI elements.
- **404 Page:** Custom 404 Not Found page for undefined routes.
- **Show/Hide Password Toggle:** Password visibility toggle on the registration page.

---

## Layout Overview

- **Navbar:** Website name, Home, My Profile (protected). Displays user image and name on hover when logged in; otherwise shows Login button.
- **Main Section:** Content displayed based on routing.
- **Footer:** Includes links to terms, privacy policy, and social media.
- **Home Page:** Features a slider with 3+ slides, subscription service cards (minimum 6), and additional content sections.
- **Subscription Details Page:** Protected route showing detailed info, reviews, and rating input.
- **Authentication Pages:** Login, Register, and Forgot Password with validations and error handling.
- **Profile Page:** Allows users to view and edit their name and photo URL securely.
- **Extra Private Route:** Contains meaningful content accessible only after login.

---

## Environment Variables

Sensitive information such as Firebase configuration keys is secured using `.env` files. Make sure to add authorized domains in Firebase settings when deploying.

---

