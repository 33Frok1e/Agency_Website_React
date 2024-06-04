import React, { useEffect, useState } from 'react'
import Logo from '../assets/Icon.png'
import { Link } from 'react-scroll'
import { FaBars, FaXmark } from 'react-icons/fa6'


function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSticky, setIsSticky] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true)
            }
            else {
                setIsSticky(false)
            }
        };
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.addEventListener('scroll', handleScroll)
        };
    });

    const navItems = [
        {Link: "Home", Path: "home"},
        {Link: "Service", Path: "service"},
        {Link: "About", Path: "about"},
        {Link: "Product", Path: "product"},
        {Link: "Testimonial", Path: "testimonial"},
        {Link: "FAQ", Path: "faq"}
    ]

  return (
    <header className='w-full bg-white md:bg-transparent fixed z-50 top-0 left-0 right-0'>
        <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300" : ""}`}>

            <div className='flex justify-between items-center text-base gap-8'>
                <a className='text-2xl flex items-center space-x-3 font-semibold' href=""><img className='w-7 inline-block items-center' src={Logo} alt='logo' /><span className='text-[#263238]'>QUIRKY</span></a>

                {/* nav items for large devices */}
                <ul className='md:flex space-x-12 hidden'>
                    {navItems.map((item, index) => <Link spy={true} smooth={true} offset={-100} to={item.Path} key={index} className='block text-base text-gray-900 hover:text-brandPrimary first:font-medium cursor-pointer' >{item.Link}</Link>)}
                </ul>

                {/* btn for large devices */}
                <div className='space-x-12 hidden lg:flex items-center'>
                    <a href="/" className=' hidden lg:flex items-center text-brandPrimary hover:text-gray-900'>Login</a>
                    <button className='bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey'>Sign up</button>
                </div>

                {/* Menu btn for only device */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-neutralDGrey focus:outline-none focus:text-neutralDGrey'>
                        {isMenuOpen ? (<FaXmark className='h-6 w-6' />) : (<FaBars className='h-6 w-6' />)}
                    </button>
                </div>
            </div>

            {/* items for mobile devices */}
            <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${ isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden" }`}>
                {navItems.map((item, index) => <Link spy={true} smooth={true} offset={-100} to={item.Path} key={index} className='block text-base text-gray-900 hover:text-brandPrimary first:font-medium cursor-pointer' >{item.Link}</Link>)}
            </div>

        </nav>
    </header>
  )
}

export default Navbar