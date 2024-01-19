import React from 'react';
import { Link } from 'react-router-dom';
import '../.././index.css'; 

const Layout = ({ children }) => {
    return (
        <div>
            <header>

                <div className="bg-emerald-600 p-6"></div>



                <nav className="p-6">
                    <div className="flex justify-center">
                        <ul className="flex space-x-8 text-3xl text-gray-700">
                            <li className="relative hover:text-emerald-600 mb-2 pb-3">
                                <Link to='/' data-testid="home-link">Home</Link>
                                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-600"></div>
                            </li>
                            <li className="relative hover:text-emerald-600 mb-2 pb-3">
                                <Link to='/about' data-testid="about-link">About</Link>
                                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-600"></div>
                            </li>
                            <li className="relative hover:text-emerald-600 mb-2 pb-3">
                                <Link to='/products' data-testid="products-link">Products</Link>
                                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-600"></div>
                            </li>
                            <li className="relative hover:text-emerald-600 mb-2 pb-3">
                                <Link to='/profile' data-testid="profile-link">Profile</Link>
                                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-600"></div>
                            </li>
                        </ul>
                        
                    </div>
                </nav>
            </header>

            <main class="flex flex-center justify-center p-4">{children}</main>

            <footer class="flex flex-center justify-center">
                <p class="underline"></p>
            </footer>
        </div>
    );
};

export default Layout;