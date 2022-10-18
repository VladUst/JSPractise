import React, { FC } from 'react';
import PostContainer from './PostContainer';
import './MainPage.css';
interface MainPageProps{
    children?: React.ReactNode;
}

export const MainPage:FC<MainPageProps> = ({children}) => {
    return (
        <main>
            <PostContainer />
        </main>
    );
};