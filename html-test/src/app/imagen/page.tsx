"use client";

import Chrome from '../chromium-logo.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const googleUrl = new URL("/search", "https://www.google.com");

export default function Page() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  function redirectToGoogle() {
    googleUrl.searchParams.set("udm", "2")
    googleUrl.searchParams.set("as_q", query)
    router.push(googleUrl.toString())
  }
  return (
    <div className="flex flex-col h-screen">
      <Links />
      <main className="flex flex-col items-center justify-center h-full space-y-8">
        <Image src={Chrome} alt="chromium logo" className="w-32" />
        <input type="text" className="border-2 border-gray-600 w-2/3" value={query} onChange={function (event) {
          setQuery(event.target.value)
        }} />
        <div className="flex flex-row justify-center space-x-4 ">
          <button type="button" onClick={redirectToGoogle} className="w-40 border-2 border-gray-600 bg-gray-800 text-white">Google search</button>
          <button type="button" className="w-40 border-2 border-gray-600 bg-gray-800 text-white">I'm feeling lucky</button>
        </div>
      </main>
    </div>
  )
}

function Links() {
    return (
      <div className="flex flex-row justify-end space-x-4 p-4">
        <a href="/" className="w-40 text-center border-2 border-gray-600 bg-gray-800 text-white">Back To Main Page</a>
        <a href="/advanced" className="w-40 text-center border-2 border-gray-600 bg-gray-800 text-white">Advanced Search</a>
      </div>
    )
  }