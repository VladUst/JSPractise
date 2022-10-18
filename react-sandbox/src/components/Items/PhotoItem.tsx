import React, { FC } from 'react';
import { IPhoto } from '../../models/IPhoto';

interface PhotoItemProps {
    photo: IPhoto;
}
export const PhotoItem:FC<PhotoItemProps> = ({photo}) => {
    return (
        <div className='photo'>
            <div>{photo.id}. {photo.title}</div>
            <img src={photo.thumbnailUrl} alt="frame"/>
        </div>
    );
};
