import Head from "next/head";
import Link from "next/link";
import { Layout } from "./components/layout";
import { LoginInfo } from "./components/LoginInfo"
import Image from "next/image";
import { signIn, useSession } from 'next-auth/react';

export default function Login(){

    // async function handleGoogleSignin() {
    //     signIn('google',{callbackUrl : "http://localhost:8000"})
    // }

    async function handleGoogleLogin () {
        const result = await signIn('google');
        if (result?.ok) {
            // Google認証成功後、ユーザー情報をバックエンドに送信
            const { data: session } = useSession();
            if (session) {
                await fetch('/api/register_user', { // バックエンドのエンドポイント
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ 
                        email: session.user.email, 
                        name: session.user.name, 
                        google_id: session.user.id 
                    }),
                });
            }
        }
        signIn('google',{callbackUrl : "http://localhost:8000"})
    }

    return(
        <Layout>
            <Head>
                <title>Login</title>
            </Head>
            <section className="w-3/4 mx-auto flex flex-col gap-10">
                <div className="title">
                    <h1 className="text-gray-800 text-4xl font-bold py-4">Explore</h1>
                    <p className=" w-3/4 mx-auto text-gray-400">HHKBHHKBHHKBHHKBHHKBHHKB</p>
                </div>
                <LoginInfo/>
                <form className=" flex flex-col gap-5">
                    <div>
                        <button type="button" onClick={handleGoogleLogin} className="w-full border py-3 flex justify-center gap-2 hover:bg-gray-200">
                            Sign In With Google<Image src={'/assets/google.svg'} width="20" height={20} alt="googleicon" className="pt-1"></Image>
                        </button>
                    </div>
                </form>
                <p className="text-gray-400 text-center">
                    don't have an account yet?  <Link className=" text-blue-700" href={'/register'}>Sign Up</Link>
                </p>
            </section>
        </Layout>
    )
}