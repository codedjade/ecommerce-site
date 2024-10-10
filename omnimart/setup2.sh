#!/bin/bash

# Install necessary npm packages
echo "Installing backend dependencies..."
npm install express mongoose dotenv bcryptjs jsonwebtoken

# Set up MongoDB and environment variables
echo "Setting up MongoDB and environment variables..."

# Create .env file
if [ ! -f .env ]; then
  echo "Creating .env file..."
  cat <<EOT > .env
PORT=5000
MONGO_URI=mongodb+srv://codedjade001:JCBq8%40.BP%40Pp9px@cluster0.2f87s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=09c08b77996ee2bc59aed566227753557e2d7102cf9f02776c01d869a95b702a
EOT
fi

# Run the server
echo "Starting the backend server..."
npm start
