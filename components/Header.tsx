import Image from 'next/image'
import React from 'react'
import {ChevronDownIcon, HomeIcon} from '@heroicons/react/solid';
import {BeakerIcon} from '@heroicons/react/outline';

function Header() {
  return (
    <div className="flex bg-white px-4 py-2 shadow-sm">
        <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
            <Image src="https://links.papareact.com/fqy" layout="fill" objectFit='contain'/>
        </div>
        <div className="flex     items-center mx-7">
            <HomeIcon className="h-5 w-5" />
            <p>Home</p>
            <ChevronDownIcon className="h-5 w-5"/>
        </div>
    </div>
  )
}

export default Header