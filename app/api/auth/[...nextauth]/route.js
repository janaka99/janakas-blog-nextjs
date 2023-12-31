import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/user";
import { connectToDB } from "@/utils/dbconnect";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials;
        try {
          //perform user verification logic
          await connectToDB();
          const user = await User.findOne({
            email: email,
            password: password,
          });

          if (!user) {
            throw new Error("Invalid credentials");
          }

          return {
            name: user.name,
            email: user.email,
            id: user._id,
          };
        } catch (error) {
          console.error(error);
          throw new Error("Invalid credentials");
        }
      },
    }),
  ],
  callbacks: {
    session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
    jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token;
        token.userId = user._id;
        token.userId = user._id;
      }
      return token;
    },
  },

  pages: {
    signIn: "/user/login",
  },
  session: {
    strategy: "jwt",
  },
});

export { handler as GET, handler as POST };
