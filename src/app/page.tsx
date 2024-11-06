import Chrome from './chromium-logo.png'
import Image from 'next/image'

export default function Page() {
  function redirectToGoogleLucky() {
    googleUrl.searchParams.set("q", q)
    googleUrl.searchParams.set("btnI", "I'm Feeling Lucky")
    router.push(googleUrl.toString())
  }

  return (
    <div className="flex flex-col h-screen bg-black">
      <Links />
      <main className="flex flex-col items-center justify-center h-full space-y-8">
        <Image src={Chrome} alt="chromium logo" className="w-32" />
        <form action="https://www.google.com/search" className="flex flex-col items-center w-2/5 space-y-8">
          <input type="text" name="q" className="border-2 border-gray-600 w-full" />
          <div className="flex flex-row justify-center space-x-4 ">
            <button type="submit" className="w-40 border-2 border-gray-600 bg-gray-800 text-white">Google search</button>
            <button type="submit" className="w-40 border-2 border-gray-600 bg-gray-800 text-white">I'm feeling lucky</button>
          </div>
        </form>
      </main>
    </div>
  )
}

function Links() {
  return (
    <div className="flex flex-row justify-end space-x-4 p-4">
      <a href="/imagen" className="w-40 text-center border-2 border-gray-600 bg-gray-800 text-white">Image Search</a>
      <a href="/advanced" className="w-40 text-center border-2 border-gray-600 bg-gray-800 text-white">Advanced Search</a>
    </div>
  )
}
