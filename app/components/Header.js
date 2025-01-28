import React from 'react'
import Image from 'next/image';

export default function Header() {
    return (
        <div>
            <header className="bg-white shadow-sm">
                <div className="mx-auto flex items-center justify-between py-4 px-6">
                    {/* Left Section: Logo */}
                    <div className="flex items-center">
                        <div className='h-[5.5rem] w-[5.5rem] rounded-full overflow-hidden'>
                            <img
                                src="/Logo.JPG" // Replace with your logo path
                                alt="GoTrip Logo"
                                className='h-full w-full object-cover'      
                            />
                        </div>
                        <span className="ml-2 text-xl font-bold text-blue-600">Celestial Journeys</span>
                    </div>

                    {/* Center Section: Navigation */}
                    <nav className="hidden lg:flex space-x-6 text-gray-700">
                        <a href="/" className="hover:text-blue-600">Home</a>
                        <div className="relative group">
                            <button className="hover:text-blue-600 flex items-center">
                                Categories
                                <span className="ml-1">&#9662;</span>
                            </button>
                            {/* Dropdown */}
                            <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 py-2 w-40">
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Category 1</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Category 2</a>
                            </div>
                        </div>
                        <a href="#" className="hover:text-blue-600">Destinations</a>
                        <div className="relative group">
                            <button className="hover:text-blue-600 flex items-center">
                                Blog
                                <span className="ml-1">&#9662;</span>
                            </button>
                            {/* Dropdown */}
                            <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 py-2 w-40">
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Blog 1</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Blog 2</a>
                            </div>
                        </div>
                        <div className="relative group">
                            <button className="hover:text-blue-600 flex items-center">
                                Pages
                                <span className="ml-1">&#9662;</span>
                            </button>
                            {/* Dropdown */}
                            <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 py-2 w-40">
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Page 1</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Page 2</a>
                            </div>
                        </div>
                        <a href="#" className="hover:text-blue-600">Dashboard</a>
                        <a href="#" className="hover:text-blue-600">Contact</a>
                    </nav>

                    {/* Right Section: Controls */}
                    <div className="flex items-center space-x-4">
                        <div className="relative group">
                            <button className="flex items-center text-gray-700 hover:text-blue-600">
                                USD
                                <span className="ml-1">&#9662;</span>
                            </button>
                            {/* Dropdown */}
                            <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 py-2 w-24">
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">USD</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">EUR</a>
                            </div>
                        </div>
                        <div className="relative group">
                            <button className="flex items-center text-gray-700 hover:text-blue-600">
                                <Image
                                    src="/lang.png" // Replace with your flag image
                                    alt="Language"
                                    width={20}
                                    height={20}
                                    className="mr-1"
                                />
                                United States
                                <span className="ml-1">&#9662;</span>
                            </button>
                            {/* Dropdown */}
                            <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 py-2 w-40">
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">United States</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">United Kingdom</a>
                            </div>
                        </div>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                            Sign In / Register
                        </button>
                    </div>
                </div>
            </header>


        </div>
    )
}