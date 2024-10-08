"use server"
import * as z from "zod"
import {LoginSchema} from "@/schemas";
import {signIn} from "@/auth";
import {DEFAULT_LOGIN_REDIRECT} from "@/routes";
import {AuthError} from "next-auth";

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values);


    if (!validatedFields.success) {
        return {error: "Invalid Fields"}
    }
    const {email, password} = validatedFields.data;
    try {
       const res =  await signIn("credentials",
            {
                email,
                password,
                redirectTo: DEFAULT_LOGIN_REDIRECT
            }
        )
    } catch (e) {
        if (e instanceof AuthError) {
            switch (e.type) {
                case "CredentialsSignin":
                    return {error: "Invalid Credentials!"}
                default:
                    return {error: "Something went wrong!"}
            }
        }
        throw e;
        //TODO: Write the catch block
    }


}