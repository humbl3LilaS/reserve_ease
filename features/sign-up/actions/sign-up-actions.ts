"use server"

import {SignUpSchemaType} from "@/validation/schema";
import {db} from "@/database/drizzle";
import {users} from "@/database/schema";
import {hashPassword} from "@/lib/actions";
import {signIn} from "@/auth";


export const singUp = async (payload: Omit<SignUpSchemaType, "confirmPassword">) => {
    try {
        const hashedPassword = await hashPassword(payload.password);


        const [user] = await db
            .insert(users)
            .values(
                {
                    ...payload,
                    password: hashedPassword,
                }
            )
            .returning();
        if (!user) {
            return undefined;
        }

        // invoke auth.js signIn to get session data
        await signIn("credentials", {email: payload.email, password: payload.password, redirect: false});

        return user;

    } catch (error) {
        console.log("Error during signUp", error)
    }
}