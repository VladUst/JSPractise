import React, { FC } from 'react';
import { IUser } from '../../models/IUser';

interface UserItemProps {
    user: IUser;
}
export const UserItem:FC<UserItemProps> = ({user}) => {
    return (
        <div className='user'>
            {user.id}.{user.name} : {user.email}
        </div>
    );
};