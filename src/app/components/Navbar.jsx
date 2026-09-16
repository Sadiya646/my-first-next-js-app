import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        
<header className="sticky top-0 z-50 bg-base-100/80 backdrop-blur-md border-b border-base-200 shadow-sm">
      <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navbar Start (Mobile Menu & Logo) */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden hover:bg-primary/10 hover:text-primary transition-colors">
              <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow-lg border border-base-200">
              <li><Link href="/" className="font-medium hover:text-primary">হোম</Link></li>
              <li><Link href="/shop" className="font-medium hover:text-primary">শপ</Link></li>
              <li>
                <span className="font-medium">ক্যাটাগরি</span>
                <ul className="p-2 bg-base-200/50 rounded-box mt-1">
                  <li><Link href="/category/tech">টেকনোলোজি</Link></li>
                  <li><Link href="/category/lifestyle">লাইফস্টাইল</Link></li>
                </ul>
              </li>
              <li><Link href="/about" className="font-medium hover:text-primary">আমাদের সম্পর্কে</Link></li>
              <li><Link href="/contact" className="font-medium hover:text-primary">যোগাযোগ</Link></li>
            </ul>
          </div>
          
          {/* Brand Logo */}
          <Link href="/" className="btn btn-ghost text-2xl font-extrabold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent hover:bg-transparent">
            TechFlow
          </Link>
        </div>

        {/* Navbar Center (Desktop Menu) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1 font-medium">
            <li><Link href="/" className="hover:text-primary hover:bg-primary/15 transition-all rounded-lg">Home</Link></li>
            <li><Link href="/shop" className="hover:text-primary hover:bg-primary/15 transition-all rounded-lg">Shop</Link></li>
            
            {/* Dropdown with Details */}
            <li>
              <details>
                <summary className="hover:text-primary hover:bg-primary/15 transition-all rounded-lg cursor-pointer">Category</summary>
                <ul className="p-2 bg-base-100 rounded-box w-48 shadow-xl border border-base-200 mt-2">
                  <li><Link href="/category/tech" className="hover:text-primary rounded-md">Technology</Link></li>
                  <li><Link href="/category/lifestyle" className="hover:text-primary rounded-md">Lifestyle</Link></li>
                </ul>
              </details>
            </li>

            <li><Link href="/about" className="hover:text-primary hover:bg-primary/15 transition-all rounded-lg">About us</Link></li>
            <li><Link href="/contact" className="hover:text-primary hover:bg-primary/15 transition-all rounded-lg">Contact</Link></li>
          </ul>
        </div>

        {/* Navbar End (Action Button) */}
        <div className="navbar-end gap-2">
          <Link href="/login" className="btn btn-sm sm:btn-md btn-ghost font-medium">Login</Link>
          <Link href="/register" className="btn btn-sm sm:btn-md btn-primary text-white shadow-md hover:shadow-lg transition-all">Sign in</Link>
        </div>

      </div>
    </header>
      
    );
};

export default Navbar;