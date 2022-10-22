import React, { useState } from 'react';
import { Cards } from './Cards';
import { DropFile } from './DropFile';
import { Kanban } from './Kanban';
import './ToolsPage.css';

export const ToolsPage = () => {
    return (
        <>
        <Cards />
        <Kanban />
        <DropFile />
        </>
    );
};