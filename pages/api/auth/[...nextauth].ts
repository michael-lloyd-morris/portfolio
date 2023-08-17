import NextAuth from 'next-auth'
import CredentialsProvider from '@auth/core/providers/credentials'

export default NextAuth({
  session: {
    strategy: "jwt"
  },
  providers: [
    // @ts-ignore
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        username: { type: "text", label: "Email"},
        password: { type: "password", label: "Password"}
      },
      async authorize(credentials, req) {
        if ( credentials.username === "john.doe@test.com" && credentials.password === "password") {
          return { id: "1", name: "John Doe", email: "john.doe@test.com" }
        }
        throw new Error("InvalidLogin")
      }
    })
  ],
  pages: {
    signIn: "/demos/login",
    error: "/demos/login"
  }
})
