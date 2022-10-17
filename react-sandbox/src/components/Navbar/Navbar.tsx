import React, { FC } from 'react';
import './Navbar.css';

interface NavbarProps{
    handleSidebar: () => void;
}

const Navbar:FC<NavbarProps> = ({handleSidebar}) => {
    return (
        <nav className='navbar'>
            <div className='burger-btn' onClick={handleSidebar}>
                <span></span>
            </div>
        </nav>
    );
};

export default Navbar;