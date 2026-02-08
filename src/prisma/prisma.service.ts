import { PrismaClient } from "./generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config"; 

// 1. Get connection string from environment
const connectionString = process.env.DATABASE_URL!;

// 2. Initialize the adapter
const adapter = new PrismaPg({ connectionString });

// 3. Initialize Prisma Client with the adapter
export const prisma = new PrismaClient({
  adapter,
});

export default prisma;