# Use the latest LTS version of Node.js
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application files
COPY portfolio-website .

# Expose the Vite default port
EXPOSE 5173

# Define the command to run your app with host flag
CMD ["npm", "run", "dev", "--", "--host"]