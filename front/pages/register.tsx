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
                    {/* <div className="flex border rounded-xl relative">
                        <input 
                        className="w-full py-4 px-6 border rounded-xl bg-slate-50 focus:outline-none border-none"
                        type="text"
                        name="Username"
                        placeholder="Username"
                        />
                    </div>
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
                        name="password"
                        placeholder="password"
                        type={`${show ? 'Hide' : 'Show'}`}
                        />
                    </div>
                    <div className="flex border rounded-xl relative">
                        <input 
                        className="w-full py-4 px-6 border rounded-xl bg-slate-50 focus:outline-none border-none"
                        type="password"
                        name="confirm password"
                        placeholder="Confirm Password"
                        />
                    </div> */}
                    <div className="input-button">
                        <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-md py-3 text-gray-50 text-lg
                        hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:border-blue-500 hover:text-gray-700">
                            Login
                        </button>
                    </div>
                </form>
                <p className="text-gray-400 text-center">
                    Have an account ?  <Link className=" text-blue-700" href={'/register'}>Sign In</Link>
                </p>
            </section>
        </Layout>
    )
}