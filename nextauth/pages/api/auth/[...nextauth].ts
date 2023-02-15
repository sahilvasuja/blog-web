import NextAuth from "next-auth"
import { JWT } from 'next-auth/jwt';
import { User,Account } from "next-auth";
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import GoogleAccount  from 'next-auth/providers';
// import { GoogleAccount, GoogleProvider } from 'next-auth/providers/google';
interface Env{
    clientId?:any;
    clientSecret?:any;
   
  }
  // type MyJWT = JWT & {
  //   accessToken?: string;
  // };
export const authOptions = {
  providers: [
    GithubProvider({
        clientId: process.env.GITHUB_ID || 'cf182a6861b7f7a1c712',
      clientSecret: process.env.GITHUB_SECRET || 'e59db3d64458cb407853cd0058a69b561cc754d2',
    }),
    GoogleProvider({
      
      clientId: process.env.GOOGLE_ID || '1076546050061-gh9s439cd06d742t8rpjjr094d54497g.apps.googleusercontent.com',
      clientSecret: process.env.GOOGLE_SECRET || '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',
      authorization: {
          params: {
            prompt: "consent",
            access_type: "offline",
            response_type: "code"
          }
        }
    })
    
  ]
  // jwt: {
  //   encryption: true,
  // },

  
  // callbacks: {
  //   session({ session, token, user }) {
  //     return session 
  //   },
  
  // callbacks: {
  //   async jwt(token: MyJWT, user: User, account:GoogleAccount): Promise<MyJWT> {
  //     if (account?.accessToken) {
  //       token.accessToken = account.accessToken as string;
  //     }
  //     return token;
  //   },
  // },
}

export default NextAuth(authOptions)


