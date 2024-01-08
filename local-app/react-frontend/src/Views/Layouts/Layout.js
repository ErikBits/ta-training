import React from 'react';
import { Link } from 'react-router-dom';
import '../.././index.css'; 

const Layout = ({ children }) => {
    return (
        <div>
            <header>
                <nav class="bg-emerald-600 p-4">
                    <div class="flex justify-center">
                        <ul class="flex space-x-8 text-gray-300 font-bold text-2xl">
                            <li class="hover:text-white"><Link to='/' id="home-link">Home</Link></li>
                            <li class="hover:text-white"><Link to='/about' id="about-link">About</Link></li>
                            <li class="hover:text-white"><Link to='/products' id="products-link">Products</Link></li>
                            <li class="hover:text-white"><Link to='/profile' id="products-link">Profile</Link></li>
                        </ul>


                        {/* <div class="flex spaxe-x-10 px-4">
                            <Link to="/profile" id="profile-link">
                                <img src={profileLogo} alt='profileLogo'></img>
                            </Link>
                        </div>  */}
                        
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