import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ISidebarLink } from '../../models/ISidebarLink';
import './Sidebar.css';

interface SidebarProps{
    header: string;
    links: ISidebarLink[];
    sidebarActive: boolean;
    handleSidebar: () => void;
}
export const Sidebar:FC<SidebarProps> = ({header, links, sidebarActive, handleSidebar}) => {
    return (
        <div className={sidebarActive ? 'sidebar active' : 'sidebar'}>
            <div className='blur' onClick={handleSidebar}/>
            <div className="sidebar__content">
                <div className="sidebar__header">{header}</div>
                <ul className='sidebar__list'>
                    {links.map(link => 
                     <li className='sidebar__link' key={link.to}>
                        <i className="material-icons">{link.icon}</i>
                        <Link to={link.to}>{link.name}</Link>
                     </li>   
                    )}
                </ul>
            </div>
        </div>
    );
};