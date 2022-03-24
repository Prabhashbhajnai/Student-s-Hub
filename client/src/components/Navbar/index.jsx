import React from 'react';
import { FaUserAlt } from "react-icons/fa";
import { RiSearch2Line } from "react-icons/ri";

const MobileNav = () => {
    return (
        <div className="flex w-full items-center justify-between lg:hidden">
            <div className="w-28 h-28">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQcDzDxqzkSGnfiZ7oY7wrtXYToyRcbjShHg&usqp=CAU"
                    alt="logo"
                    className="w-full h-full"
                />
            </div>
            <div className="flex items-center gap-3">
                <button className="bg-customPink-200  text-white py-2 px-3 rounded-full">
                    UseApp
                </button>
                <span className="border p-2 border-gray-300 text-Library-400 rounded-full">
                    <FaUserAlt />
                </span>
            </div>
        </div>
    );
};

const LargeNav = () => {
    return (
        <>
            <div className="flex container px-3">
                <div className="hidden w-full mr-20 items-center justify-between lg:flex gap-5 ">
                    <div className="w-28 h-24">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQcDzDxqzkSGnfiZ7oY7wrtXYToyRcbjShHg&usqp=CAU"
                            alt="logo"
                            className="w-full h-full"
                        />
                    </div>
                    <h1 className='text-2xl mr-6'>Student's Hub</h1>
                    <div className="w-2/4 mr-56 bg-white shadow-md p-3 border border-gray-200 rounded">
                        <div className="flex items-center gap-2 ">
                            <RiSearch2Line />
                            <input
                                type="search"
                                placeholder="Search for your books"
                                className="w-full focus:outline-none"
                            />
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <button className="text-gray-500 text-xl hover:text-gray-800">
                            Login
                        </button>
                        <button className="text-gray-500 text-xl hover:text-gray-800">
                            Signup
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

const Navbar = () => {
    return (
        <>
            <nav className="px-2 py-0 lg:p-4 flex shadow-md lg:shadow-none w-full flex-col items-center">
                <MobileNav />
                <LargeNav />
            </nav>
        </>
    );
};





export default Navbar;