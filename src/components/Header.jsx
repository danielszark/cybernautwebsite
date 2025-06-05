import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="font-zing bg-blue-800 text-blue-100">
        <div className="flex flex-col items-center mb-6 pt-25">
            <h1 className="text-4xl font-bold text-center">What is my social media doing to me?</h1>
            <h2 className="text-3xl mt-2 pt-2">Project Site</h2>
        </div>
        <nav className="py-10">
            <ul className="flex justify-center text-xl space-x-10 flex-wrap ">
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'font-bold text-yellow-200' : 'hover:text-gray-300'}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/description" className={({ isActive }) => isActive ? 'font-bold text-yellow-200' : 'hover:text-gray-300'}>Description</NavLink>
                </li>
                <li>
                    <NavLink to="/research" className={({ isActive }) => isActive ? 'font-bold text-yellow-200' : 'hover:text-gray-300'}>Research</NavLink>
                </li>
                <li>
                    <NavLink to="/final-product" className={({ isActive }) => isActive ? 'font-bold text-yellow-200' : 'hover:text-gray-300'}>Final Product</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  );
};

export default Header;