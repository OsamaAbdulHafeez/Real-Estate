import React, { useState } from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'
import logo from '/logo.png'
const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav className='flex items-center h-24'>
            <div className="basis-3/5 flex items-center gap-[50px]">
                <Link to="/" className='flex items-center gap-2 text-md font-bold'>
                    <img src={logo} alt="" className='w-[28px]' />
                    <span className='md:hidden lg:block'>Karachi Estate</span>
                </Link>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/agents">Agents</Link>
            </div>
            <div className="basis-2/5 flex items-center justify-end lg:bg-red-100 h-full">
                <Link to="/signup" className='py-3 px-6'>Sign in</Link>
                <Link to="/signin" className='bg-amber-300 m-5 py-3 px-6'>Sign up</Link>
                <div className='md:hidden' onClick={()=>setOpen(!open)}>
                    <img src="./menu.png" alt="" className='h-10 w-10 cursor-pointer' />
                </div>
                <div className={`absolute top-0 right-[-50%] h-[100vh] bg-black w-[50%]`}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/agents">Agents</Link>
                    <Link to="/signup">Sign in</Link>
                    <Link to="/signin">Sign up</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
