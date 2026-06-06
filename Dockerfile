# Build the application
FROM node:22-alpine AS builder

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
FROM node:22-alpine

WORKDIR /app

# We don't even need node_modules because Nitro builds a standalone server!
COPY --from=builder /app/.output ./.output

# Expose the port Nitro binds to (usually 3000, determined by PORT env variable)
ENV PORT=3000
EXPOSE 3000

# Start Nitro server
CMD ["node", ".output/server/index.mjs"]
