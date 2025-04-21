# Use the official Node.js 18 image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the application
COPY . .

# Expose the default n8n port
EXPOSE 5678

# Run the application
CMD ["npm", "start"]
