import { TRegister } from "@/zod/schema/register";
import { Prisma, User } from "@prisma-authdb/client";
import argon2 from "argon2";

import { dbAuth } from "@/db-auth";

export const getUserByEmail = async (email: string) => {
  const user = await dbAuth.user.findUnique({
    where: {
      email: email,
    },
  });
  return user;
};

export const userCreate = async (data: TRegister): Promise<User> => {
  try {
    const password = await hashPassword(data.password);
    const user = await dbAuth.user.create({
      data: {
        email: data.email,
        name: data.name,
        password,
      },
    });
    return user;
  } catch (error) {
    // what object is error?
    //console.log("[error]", Object.prototype.toString.call(error));
    console.log("[error]", error);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      //console.log(error.code);
      throw new Error(error.message);
    }

    throw new Error("Error creating user");
  }
};

export async function hashPassword(password: string): Promise<string> {
  try {
    const hash = await argon2.hash(password);
    return hash;
  } catch (err) {
    throw new Error("Error hashing password");
  }
}

export async function verifyPassword(
  hash: string,
  password: string
): Promise<boolean> {
  try {
    const isMatch = await argon2.verify(hash, password);
    return isMatch;
  } catch (err) {
    throw new Error("Error verifying password");
  }
}
