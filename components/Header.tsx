import Image from "next/image";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { GlobeAltIcon, Bars3Icon, UserIcon } from "@heroicons/react/24/outline";

function Header() {
  return (
    <header
      className="sticky top-0 z-50 grid 
    grid-cols-3 bg-white shadow-md p-5
    md:px-10
    "
    >
      {/* Left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://res.cloudinary.com/dzhvw7vxn/image/upload/v1676106221/airbnbAssets/airbnb_logo_iio7h7.png"
          fill
          className="object-contain object-left"
          alt="airbnb Logo"
        />
      </div>

      {/* Middle Search */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-md">
        <input
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600"
          type="text"
          placeholder="Start your search"
        />
        <MagnifyingGlassIcon
          className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full
         p-2 cursor-pointer md:mx-2"
        />
      </div>

      {/* Right */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="cursor-pointer hidden md:inline">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <Bars3Icon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

export default Header;
