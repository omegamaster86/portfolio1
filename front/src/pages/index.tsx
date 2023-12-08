import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { NextPage } from 'next';
import Link from 'next/link';

const Login: NextPage = () => {
  const { data: session } = useSession();
  return (
      <>
          {
              session && (
                  <div>
                     <h1>ようこそ, {session.user && session.user.name}さん</h1>
                      <button onClick={() => signOut()}>ログアウト</button>
                  </div>
              )
          }
          {
              !session && (
                  <div>
                      <p>ログインしていません</p>
                      {/* <Link href="/test"> */}
                        <button onClick={() => signIn()}>ログイン</button>
                      {/* </Link> */}
                  </div>
              )
          }
      </>
  );
};

export default Login;