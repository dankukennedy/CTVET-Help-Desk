// prisma.config.ts (at project root)

// Make sure to install the dotenv package if you haven't already: npm install dotenv
import "dotenv/config"; 
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});
