import React, { FC } from 'react';
import './Main.css';
interface MainProps{
    children?: React.ReactNode;
}

export const Main:FC<MainProps> = ({children}) => {
    return (
        <main className='main'>
            {children}
        </main>
    );
};