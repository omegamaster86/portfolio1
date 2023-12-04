import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import React from 'react';
// import { useSession, signIn, signOut } from 'next-auth/react';
// import { NextPage } from 'next';

// export const Login: NextPage = () => {
//   const { data: session } = useSession();
//   return (
//       <>
//           {
//               session && (
//                   <div>
//                      <h1>ようこそ, {session.user && session.user.name}さん</h1>
//                       <button onClick={() => signOut()}>ログアウト</button>
//                   </div>
//               )
//           }
//           {
//               !session && (
//                   <div>
//                       <p>ログインしていません</p>
//                       <button onClick={() => signIn()}>ログイン</button>
//                   </div>
//               )
//           }
//       </>
//   );
// };


export default function App({ 
	Component, 
	pageProps: { session, ...pageProps }
	}: AppProps) {
    return (
    <SessionProvider session={session}>
	    <Component {...pageProps} />
    </SessionProvider>
    );
}