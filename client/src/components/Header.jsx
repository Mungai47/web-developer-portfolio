
function Header() {
  return (
    <div className="flex justify-center bg-gray-300 shadow-lg">
        <header className="flex justify-between p-5 w-3/4 ">
           <h1 className="flex text-2xl font-semibold">
               <span>Joe</span>
               <span className="text-rose-800">Code</span>
           </h1>
           <ul className="flex flex-wrap justify-end gap-6 text-lg font-medium ">
               <li className="hover:underline">Home</li>
               <li className="hover:underline">Services</li>
               <li className="hover:underline">Portfolio</li>
               <li className="hover:underline">Blog</li>
               <li className="hover:underline">Contact Me</li>
               <li className="hover:underline">About</li>
           </ul>
        </header>
    </div>
  )
}

export default Header