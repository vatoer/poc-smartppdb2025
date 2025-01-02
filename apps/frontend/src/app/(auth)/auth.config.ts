import { PrismaAdapter } from "@auth/prisma-adapter";
import { dbAuth } from "@workspace/database/db-auth";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

import {
  getUserByEmail,
  verifyPassword,
} from "@workspace/database/data/auth/user";
import { LoginSchema } from "@workspace/database/zod/schema/login";

export default {
  providers: [
    Google,
    Credentials({
      async authorize(credentials) {
        const validatedCredentials = LoginSchema.safeParse(credentials);

        if (validatedCredentials.success) {
          const { email, password } = validatedCredentials.data;
          const user = await getUserByEmail(email);
          if (!user || !user.password) {
            return null;
          }

          const isPasswordMatch = await verifyPassword(user.password, password);
          if (!isPasswordMatch) {
            return null;
          }

          //return user;
          return {
            ...user,
          };
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
