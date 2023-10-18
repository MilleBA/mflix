'use client'

import {usePathname} from 'next/navigation';
import Link from "next/link";
import {useState} from "react";
import {Menu, X} from "lucide-react";


export function NavBar() {
    const pathname = usePathname();

    const linkStyle = 'flex items-center font-bold font-mono tracking-wide hover:text-blue-950 duration-300';

    const activeStyle = linkStyle + ' text-white';
    const nonActiveStyle = linkStyle + ' text-teal-300';

    const [open, setOpen] = useState(false);

    const links = [
        {name: "Home", href: "/"},
        {name: "People", href: "/people"},
    ];

    return (
        <div className='shadow-md w-full top-0 left-0 border-b-2 border-blue-950'>
            <div
                className='md:flex items-center justify-between bg-gray-950 border-b-1 border-blue-950 py-4 md:px-10 px-7'>
                <div className='flex items-center cursor-pointer'>
                    <span className='mr-1 pt-2'>Logo</span>
                </div>
                <div onClick={() => setOpen(!open)}
                     className='text-3xl absolute right-8 top-9 cursor-pointer md:hidden'>
                    {open ? <X className='text-white'/> : <Menu className='text-white'/>}
                </div>
                <ul className={`md:flex md:items-center md:pb-0 absolute md:static left-0 bg-gray-950 bg-opacity-95  w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-21' : 'top-[-490px]'} `}>
                    {links.map((link) => (
                        <li key={link.name} className='md:ml-8 md:my-0 my-7'>
                            <Link
                                href={link.href}
                                className={pathname === link.href ? activeStyle : nonActiveStyle}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    <div className='md:p-4'>
                        <button>Logout</button>
                    </div>
                </ul>

            </div>
        </div>
    );
}