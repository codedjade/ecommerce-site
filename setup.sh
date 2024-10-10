#!/bin/bash

# Create the main project directories
mkdir -p ecommerce-app/src/{components,features,app}

# Create necessary files
touch ecommerce-app/src/App.jsx
touch ecommerce-app/src/main.jsx
touch ecommerce-app/src/index.css
touch ecommerce-app/src/features/userSlice.js
touch ecommerce-app/src/features/productSlice.js
touch ecommerce-app/src/app/store.js
touch ecommerce-app/src/components/Home.jsx
touch ecommerce-app/src/components/Register.jsx
touch ecommerce-app/src/components/Login.jsx
touch ecommerce-app/src/components/Dashboard.jsx

# Create README file
touch ecommerce-app/README.md

# Print success message
echo "Project structure created successfully!"
