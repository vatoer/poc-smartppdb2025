import { Prisma, PrismaClient } from "@prisma-authdb/client";

const globalForPrisma = globalThis as unknown as { prismaDbAuth: PrismaClient };

export const dbAuth = globalForPrisma.prismaDbAuth || new PrismaClient();

if (process.env.NODE_ENV !== "production")
  globalForPrisma.prismaDbAuth = dbAuth;

export { Prisma, PrismaClient };
