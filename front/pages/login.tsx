import Email from "next-auth/providers/email";
import Head from "next/head";
import Link from "next/link";
import { Layout } from "./components/layout";
import { EmailAdress, PasswordInput } from "./components/email"
import Image from "next/image";
import { signIn } from "next-auth/react"

export default function Login(){

    async function handleGoogleSignin() {
        signIn('google', { callbackUrl : "http://localhost:8000"})
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
                <EmailAdress/>
                <PasswordInput/>
                {/* <form className=" flex flex-col gap-5">
                    <div className="flex border rounded-xl relative">
                        <input 
                        className="w-full py-4 px-6 border rounded-xl bg-slate-50 focus:outline-none border-none"
                        type="email"
                        name="email"
                        placeholder="Email"
                        />
                    </div>
                    <div className="flex border rounded-xl relative">
                        <input 
                        className="w-full py-4 px-6 border rounded-xl bg-slate-50 focus:outline-none border-none"
                        type="password"
                        name="password"
                        placeholder="password"
                        />
                    </div> */}
                <form className=" flex flex-col gap-5">
                    <div className="input-button">
                        <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-md py-3 text-gray-50 text-lg
                        hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:border-blue-500 hover:text-gray-700">
                            Login
                        </button>
                    </div>
                    <div className="input-button">
                        <button type="button" onClick={handleGoogleSignin} className="w-full border py-3 flex justify-center gap-2 hover:bg-gray-200">
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