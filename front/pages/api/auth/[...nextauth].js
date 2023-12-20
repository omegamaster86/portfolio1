import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import axios from 'axios'

export default NextAuth ({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      const provider = account.provider
      const name = user.name
      const email = user.email

      try {
        const response = await axios.post(`${apiUrl}/auth/${provider}/callback`, {
          provider,
          name,
          email,
        })

        if (response.status === 200) {
          return true
        } else {
          return false
        }
      } catch (error) {
        console.log('エラー', error)
        return false
      }
    },
  },
})
