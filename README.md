
# OmniMart

OmniMart is an all-purpose marketplace eCommerce application where both consumables and non-consumables can be sold. The app allows users to register, log in, manage products, and make purchases. 

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Interacting with the App](#interacting-with-the-app)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication (registration and login)
- Role-based access (admin, seller, shopper)
- Product posting and purchasing
- View available products and details
- Shopping cart functionality

## Technologies Used

- React
- Redux Toolkit
- ViteJS
- TailwindCSS
- Node.js
- Express.js
- MongoDB (or any database you're using)
- JWT for authentication (if applicable)

## Setup Instructions

To set up the OmniMart application on your local machine, follow these steps:

### Prerequisites

#- Node.js (version 14 or higher)
```bash
sudo apt install nodejs.
node -v or node –version.
```
#- npm (Node Package Manager)
```bash
sudo apt install npm.
npm -v or npm –version.
```
#- MongoDB (or any database you're using)
```bash
npm install mongodb
```

### Clone the Repository

```bash
git clone https://github.com/codedjade/ecommerce-site
cd ecommerce-site
```
```bash
cd omnimart
```

### Start the Backend

1. Navigate to the backend directory and run the following command

```bash
cd backend
npm install
npm start
cd ..
```

2. Ensure your MongoDB service is running (if applicable).

### Start the Frontend

In a new terminal window, navigate to the Omnimart folder and run:

```bash
npm install
npm run dev
```

This will start the Vite development server and open the app in your default browser.

## Interacting with the App

1. **Registration**: Users can register by clicking the "Register" link and filling in the required fields.
2. **Login**: After registration, users can log in using their credentials. Make sure to select the correct role (shopper, seller, or admin) during login.
3. **View Products**: After logging in, users can view available products on the homepage and navigate to the dashboard.
4. **Add to Cart**: Logged-in users can add items to their cart from the product listing.
5. **Checkout**: Users can navigate to their cart and proceed to checkout.

## Contributing

Contributions are welcome! Please submit a pull request or create an issue for any suggestions or improvements.

