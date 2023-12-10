import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { NextPage } from 'next';

const Login: NextPage = () => {
    const { data: session } = useSession();
    return (
        <>
            {
                session && (
                    <div >
                       <h1>ようこそ, {session.user && session.user.name}さん</h1>
                        <button onClick={() => signOut()}>ログアウト</button>
                    </div>
                )
            }
            {
                !session && (
                    <div className='justify-center'>
                        <p className='text-rose-600'>ログインしていません</p>
                        <button className='text-rose-600' onClick={() => signIn()}>ログイン</button>
                    </div>
                )
            }
        </>
    );
};

export default Login;