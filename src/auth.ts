import NextAuth from "next-auth"
import {ZodError} from "zod"
import Credentials from "next-auth/providers/credentials"
import {PrismaAdapter} from "@auth/prisma-adapter";
import {db} from "@/lib/db";
import {LoginSchema} from "@/schemas";
import {getUserByEmail} from "@/data/user";
import bcrypt from "bcryptjs";

export const {handlers, signIn, signOut, auth} = NextAuth({
    adapter: PrismaAdapter(db),
    session: {strategy: "jwt"},
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                console.log(credentials)
                const validatedFields = LoginSchema.safeParse(credentials);
                if (validatedFields.success) {
                    const {email, password} = validatedFields.data;

                    const user = await getUserByEmail(email);
                    if (!user || !user.password) return null;

                    const passwordsMatch = await bcrypt.compare(password, user.password);
                    if (passwordsMatch) return user;
                }
                return null;
            },
        }),
    ],
    callbacks: {
        async signIn({user, account, profile, email, credentials}) {
            return true;
        },
        async redirect({url, baseUrl}) {
            return baseUrl;
        },
        jwt({token}) {
            return token
        },
        session({token, session}) {
            if (token.sub && session.user) {
                session.user.id = token.sub;
            }
            return session
        },
    },
})