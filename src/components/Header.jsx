import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="font-zing bg-blue-800 text-blue-100 py-10">
        <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-4xl font-bold">What is my social media doing to me? (Project Site)</h1>
            <ul className="flex text-2xl space-x-4">
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
                    <NavLink to="/final-product" className={({ isActive }) => isActive ? 'font-bold text-yellow-200' : 'hover:text-gray-300'}>Final Prototype</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  );
};

export default Header;