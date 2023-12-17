import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Home(){

  const [session, setSession] = useState(false)

  return (
    <div>
      <Head>
        <title>Home page</title>
      </Head>

      {session ? User() : Guest()}
    </div>
  )
}

// Guest
export const Guest = () => {
  return (
    <main className='container mx-auto text-center py-20'>
      <div className='text-4xl font-bold'>Guest Homepages</div>
      <div className='flex justify-center'>
        <Link href={'/login'} className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50">Sign In</Link>
      </div>
    </main>
  )
}

// Authorize User
export const User = () => {
  return (
    <main className='container mx-auto text-center py-20'>
      <div className='text-4xl font-bold'>User Homepages</div>

      <div className="details">
        <h5>Unknown</h5>
        <h5>Unknown</h5>
      </div>

      <div className="flex justify-center">
        <button className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50'>Sign Out</button>
      </div>

      <div className='flex justify-center'>
        <Link href={'/profile'} className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50">profile Page</Link>
      </div>
    </main>
  )
}