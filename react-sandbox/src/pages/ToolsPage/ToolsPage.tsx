import React, { useState } from 'react';
import { Cards } from './Cards';
import { Kanban } from './Kanban';
import './ToolsPage.css';

export const ToolsPage = () => {
    return (
        <>
        <Cards />
        <Kanban />
        </>
    );
};