import Head from "next/head"
import { Layout } from "./components/layout";
import Link from "next/link";
import { EmailPassword } from "./components/emailpassword"


export default function Register(){

    return (
        <Layout>
        <Head>
            <title>register</title>
        </Head>
        <section className="w-3/4 mx-auto flex flex-col gap-10">
                <div className="title">
                    <h1 className="text-gray-800 text-4xl font-bold py-4">Register</h1>
                    <p className=" w-3/4 mx-auto text-gray-400">HHKBHHKBHHKBHHKBHHKBHHKB</p>
                </div>
                <EmailPassword/>
                <form className=" flex flex-col gap-5">
                    <div className="input-button">
                        <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-md py-3 text-gray-50 text-lg
                        hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:border-blue-500 hover:text-gray-700">
                            Register
                        </button>
                    </div>
                </form>
                <p className="text-gray-400 text-center">
                    Have an account ?  <Link className=" text-blue-700" href={'/login'}>Sign In</Link>
                </p>
            </section>
        </Layout>
    )
}