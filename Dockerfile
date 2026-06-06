# Build the application
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Serve the application
FROM node:20-alpine

WORKDIR /app

# Copy package.json and lockfile
COPY package*.json ./

# Install ONLY production dependencies and vite
RUN npm install --production && npm install vite

# Copy the built assets
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/vite.config.ts ./vite.config.ts
COPY --from=builder /app/tsconfig.json ./tsconfig.json

# Expose port 3000
EXPOSE 3000

# Start Vite preview
CMD ["npx", "vite", "preview", "--port", "3000", "--host", "0.0.0.0"]
