"use client";

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
  const [btnl, setBtnl] = useState("");

  function redirectToGoogle() {
    googleUrl.searchParams.set("as_q", q)
    googleUrl.searchParams.set("as_epq", epq)
    googleUrl.searchParams.set("as_oq", oq)
    googleUrl.searchParams.set("as_eq", eq)
    router.push(googleUrl.toString())
  }
  function redirectToGoogleLucky() {
    googleUrl.searchParams.set("q", q)
    googleUrl.searchParams.set("btnI", "I'm Feeling Lucky")
    router.push(googleUrl.toString())
  }

  return (
    <div className=" flex flex-col h-screen bg-black">
      <Links />
      <main className="flex flex-col h-full">
        <div className="w-full flex justify-center">
          <Image src="/chromium-logo.png" alt="chromium logo" className="w-16" width={128} height={128} />
        </div>

        <div className="w-full flex justify-center">
          <h1 className="text-white text-2xl">Welcome To Advanced Search</h1>
        </div>

        <div className="flex flex-col space-y-8 pt-20 w-full items-start bg-black">
          <div className="grid grid-rows-5 grid-cols-[0.6fr_1.4fr_3fr] gap-4 h-52 w-2/3">
            <div className="ml-4 md:ml-10">{/*columna 1*/}
              <div className="w-36">
                <h1 className="text-lg text-white pb-4">Show pages that contain...</h1>
              </div>
              <div className="w-36">
                <h1 className="text-sm text-white h-8 mb-3 flex items-center">all of this words</h1>
              </div>
              <div className="w-36">
                <h1 className="text-sm text-white h-8 mb-3 flex items-center">this exact word or phrase</h1>
              </div>
              <div className="w-36">
                <h1 className="text-sm text-white h-8 mb-3 flex items-center">any of this words</h1>
              </div>
              <div className="w-36">
                <h1 className="text-sm text-white h-8 mb-3 flex items-center">none of this words</h1>
              </div>
            </div>
            <div className="px-4 col-span-1 md:col-span-1 w-96">{/*columna 2*/}
              <div className='h-[73px]'></div>
              <input type="text" value={q} onChange={(e) => setQuery(e.target.value)} className="border-2 border-gray-600 w-full max-w-xs h-8 mb-3 text-black flex items-center" />
              <input type="text" value={epq} onChange={(e) => setEpq(e.target.value)} className="border-2 border-gray-600 w-full max-w-xs h-8 mb-3 text-black flex items-center" />
              <input type="text" value={oq} onChange={(e) => setOq(e.target.value)} className="border-2 border-gray-600 w-full max-w-xs h-8 mb-3 text-black flex items-center" />
              <input type="text" value={eq} onChange={(e) => setEq(e.target.value)} className="border-2 border-gray-600 w-full max-w-xs h-8 mb-3 text-black flex items-center" />
            </div>
            <div className="hidden md:block justify-items-left">{/*columna 3*/}
              <div className="w-40">
                <h1 className="text-lg text-white pb-4 ">To do this in the search bar</h1>
              </div>
              <div className="w-40 mb-3">
                <h1 className="text-sm text-white h-8 flex items-center">enter the important words</h1>
              </div>
              <div className="w-40 mb-3">
                <h1 className="text-sm text-white h-8 flex items-center">enter the exact words quote unquote</h1>
              </div>
              <div className="w-40 mb-3">
                <h1 className="text-sm text-white h-8 flex items-center">enter "OR" between the words that you want</h1>
              </div>
              <div className="w-40 mb-3">
                <h1 className="text-sm text-white h-8 flex items-center">enter a hyphen at the beggining of the words</h1>
              </div>
            </div>
          </div>

          <div className="pl-16 min-[600px]:pl-52">
            <div className="flex flex-row justify-start space-x-4 mt-8 w-full bg-black">
              <button type="button" onClick={redirectToGoogle} className="w-40 border-2 border-gray-600 bg-gray-800 text-white">Google search</button>
              <button type="button" onClick={redirectToGoogleLucky} className="w-40 border-2 border-gray-600 bg-gray-800 text-white">I'm feeling lucky</button>
            </div>
          </div>
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
