import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt="" />
            <div>
                <a href="http://">Home </a>
                <a href="http://">About</a>
                <a href="http://">Display</a>
                <a href="http://">Menu</a>
            </div>

        </nav>
    );
};

export default Header;