import Image from 'next/image'
import React from 'react'
import {ChevronDownIcon, HomeIcon, SearchIcon} from '@heroicons/react/solid';
import {BeakerIcon} from '@heroicons/react/outline';

function Header() {
  return (
    <div className="flex bg-white px-4 py-2 shadow-sm sticky top-0 z-50">
        <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
            <Image src="https://links.papareact.com/fqy" layout="fill" objectFit='contain'/>
        </div>
        <div className="flex items-center mx-7 xl:min-w-[300px]">
            <HomeIcon className="h-5 w-5" />
            <p className="flex-1 ml-2 hidden lg:inline">Home</p>
            <ChevronDownIcon className="h-5 w-5"/>
        </div>
        {/* search */}
        <form className='flex flex-1 items-center space-x-2 border border-gray-200 rounded-sm bg-gray-100 px-3 py-1'>
            <SearchIcon className="h-6 w-6 text-gray-400"/>
            <input className='flex-1 bg-transparent outline-none' type="text" placeholder='Search Reddit' />
            <button hidden type='submit' />
        </form>
    </div>
  )
}

export default Header