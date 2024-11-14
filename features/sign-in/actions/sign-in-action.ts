"use server"
import {SignInSchemaType} from "@/validation/schema";
import {signIn} from "@/auth";


export const signInAction = async (payload: SignInSchemaType) => {
    try {
        // invoke auth.js signIn to get session data
        await signIn("credentials", {email: payload.email, password: payload.password, redirect: false});
        return true;

    } catch (error) {
        console.log("Error during Sign In", error)
    }
}