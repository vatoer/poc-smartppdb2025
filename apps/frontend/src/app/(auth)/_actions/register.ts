"use server";

import { ActionResponse } from "@/types/response";
import { userCreate } from "@workspace/database/data/auth/user";
import { TRegister } from "@workspace/database/zod/schema/register";
import { AuthError } from "next-auth";
import { signIn } from "../auth";

export const register = async (
  data: TRegister
): Promise<ActionResponse<string> | void> => {
  // create user
  try {
    const newUser = await userCreate(data);
  } catch (error) {
    return {
      success: false,
      error: "ER-REG-001",
      message: "Error creating user",
    };
  }

  // sign in user after creating
  try {
    await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirectTo: "/dashboard",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin": {
          console.log(error);
          return {
            success: false,
            error: "ER-REG-002",
            message: "Invalid credentials",
          };
        }
        default:
          return {
            success: false,
            error: "ER-REG-003",
            message: "Something went wrong",
          };
      }
    }
    return {
      success: false,
      error: "ER-REG-004",
      message: "Something went wrong",
    };
  }
};
