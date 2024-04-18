
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { options } from "./app/api/auth/[...nextauth]/options"

export const providerMap = options.providers.map((provider) => {
  if (typeof provider === "function") {
    const providerData = provider()
    return { id: providerData.id, name: providerData.name }
  } else {
    return { id: provider.id, name: provider.name }
  }
})

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [Google],
  pages: {
    signIn: "/dashboard",
  },
})