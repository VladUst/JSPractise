import React, { FC } from 'react';
import './Navbar.css';

interface NavbarProps{
    sidebarActive: boolean;
    handleSidebar: () => void;
    handleModal: () => void;
}

const Navbar:FC<NavbarProps> = ({handleSidebar, handleModal, sidebarActive}) => {
    return (
        <nav className='navbar'>
            <div className={sidebarActive ? 'burger-btn active' : 'burger-btn'} onClick={handleSidebar}>
                <span></span>
            </div>
            <img className='avatar' onClick={handleModal} src="https://hemofenix.ru/wp-content/uploads/monada-in-i-yan-skrytoe-znachenie-simvola-o-kotorom-malo.jpg" alt="avatar" />
        </nav>
    );
};

export default Navbar;