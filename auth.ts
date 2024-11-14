import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const {signIn, signOut, auth} = NextAuth(
    {
        providers: [
            Credentials(
                {
                    credentials: {
                        username: {label: "Username"},
                        password: {
                            label: "Password",
                            type: "password"
                        },
                    },
                    // authorize the user using drizzle
                    // async authorize({username, password}) {
                    //     const response = await fetch({username, password})
                    //     if (!response.ok) return null
                    //     return (
                    //         await response.json()
                    //     ) ?? null
                    // },
                }),
        ],
    })