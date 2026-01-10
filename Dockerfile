# Build stage
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build the project
RUN npm run build

# Production stage
FROM nginx:stable-alpine

# Update nginx to listen on port 7433 instead of 80
RUN sed -i 's/listen\(.*\)80;/listen 7433;/g' /etc/nginx/conf.d/default.conf

# Copy built files from build stage to nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 7433
EXPOSE 7433

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
