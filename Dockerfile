#################################################
#Stage 1: Build the application
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY prisma ./prisma/

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Generate Prisma Client
RUN npx prisma generate

# Build the NestJS application
RUN npm run build

##################################################
# Stage 2: Production
FROM node:20-alpine AS runner

WORKDIR /app

# Set environment to production
ENV NODE_ENV=production

# Copy only the necessary files from the builder stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
# Crucial: Copy your custom generated prisma folder
COPY --from=builder /app/generated ./generated

EXPOSE 3000

CMD ["node", "dist/main"]


#########################################################