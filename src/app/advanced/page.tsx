"use client";

import Chrome from '../chromium-logo.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const googleUrl = new URL("/search", "https://www.google.com");

export default function Page() {
  const router = useRouter();
  const [q, setQuery] = useState("");
  const [epq, setEpq] = useState("");
  const [oq, setOq] = useState("");
  const [eq, setEq] = useState("");
  function redirectToGoogle() {
    googleUrl.searchParams.set("as_q", q)
    googleUrl.searchParams.set("as_epq", epq)
    googleUrl.searchParams.set("as_oq", oq)
    googleUrl.searchParams.set("as_eq", eq)
    router.push(googleUrl.toString())
  }
  return (
    <div className="flex flex-col h-screen">
      <Links />
      <main className="flex flex-col items-center justify-center h-full space-y-8">
        <Image src={Chrome} alt="chromium logo" className="w-32" />
        <div className="grid grid-rows-5 grid-cols-3 h-36 w-2/3">
          <div>{/*columna 1*/}
            <h1 className="test-xl">Show pages that contain...</h1>
            <h1 className="text-base">all of this words</h1>
            <h1 className="text-base">this exact word or phrase</h1>
            <h1 className="text-base">any of this words</h1>
            <h1 className="text-base">none of this words</h1>
          </div>{/*fin de columna 1*/}
          <div>{/*columna 2*/}
            <div>placeholder</div>
            <input type="text" className="border-2 border-gray-600" value={q} onChange={function (event) {
              setQuery(event.target.value)
            }} />
            <input type="text" className="border-2 border-gray-600" value={epq} onChange={function (event) {
              setQuery(event.target.value)
            }} />
            <input type="text" className="border-2 border-gray-600" value={oq} onChange={function (event) {
              setQuery(event.target.value)
            }} />
            <input type="text" className="border-2 border-gray-600" value={eq} onChange={function (event) {
              setQuery(event.target.value)
            }} />
          </div>{/*fin de columna 2*/}
          <div>{/*columna 3*/}
            <h1 className="test-xl">To do this in the search bar</h1>
            <h1 className="text-base">enter the important words</h1>
            <h1 className="text-base">enter the exact words quote unquote</h1>
            <h1 className="text-base">enter "OR" between the words that you want</h1>
            <h1 className="text-base">enter a hyphen at the beggining of the words that you dont want to apear</h1>
          </div>{/*fin de columna 3*/}
        </div>
        <input type="text" className="border-2 border-gray-600 w-2/5" />
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
      <a href="/imagen" className="w-40 text-center border-2 border-gray-600 bg-gray-800 text-white">Image Search</a>
    </div>
  )
}
