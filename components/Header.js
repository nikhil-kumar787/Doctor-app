import { SearchIcon, UserCircleIcon } from "@heroicons/react/solid";
import { LogoutIcon } from "@heroicons/react/outline";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import logo from '../images/DOCTOR.png'


function Header() {
    const router = useRouter();
    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-green-400 shadow-md p-5 md:px-10'>

       
        
        <div onClick={() => router.push("/")} className='relative flex items-center h-10 cursor-pointer my-auto'>
                <Image src={logo}
                    layout='fill'
                    objectFit='contain'
                    objectPosition='left'
                />
            </div>

            <div className='flex items-center md:border-2 rounded-lg py-2 md:shadow-sm bg-white'>
            <input className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400' type='text' placeholder= "Start your search here.." />
            <SearchIcon className='hidden md:inline-flex h-8 bg-green-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
            </div>

            <div className='flex items-center space-x-4 justify-end text-gray-500'>
                
                <div className='flex items-center space-x-2 border-2 p-2 rounded-full bg-white'>
                    <LogoutIcon className='h-6 cursor-pointer' />
                    <UserCircleIcon className='h-6 cursor-pointer' onClick={() => router.push("/profile")} />
                </div>
            </div>
        </header>
    )
}

export default Header
