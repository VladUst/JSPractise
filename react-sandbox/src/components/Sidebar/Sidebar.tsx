import React, { FC } from 'react';
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
                     <li className='sidebar__link' key={link.href}>
                        <i className="material-icons">{link.icon}</i>
                        <a href={link.href}>{link.name}</a>
                     </li>   
                    )}
                </ul>
            </div>
        </div>
    );
};