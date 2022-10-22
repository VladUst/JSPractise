import React, { useState } from 'react';

export const DropFile = () => {
    const [isDrag, setDrag] = useState<boolean>(false);

    const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDrag(true);
    }

    const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        setDrag(false);
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const files = [...e.dataTransfer.files];
        console.log(files);
        const formData = new FormData();
        formData.append('file', files[0]);
        for (var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }
        setDrag(false);
    }

    return (
        <div className='cards-row'>
            {!isDrag 
                ? <div className='area'
                    onDragStart={dragOverHandler}
                    onDragOver={dragOverHandler}
                    onDragLeave={dragLeaveHandler}
                    >
                    Перетащите файл
                  </div>
                : <div
                    className='highlighted-area'
                    onDragStart={dragOverHandler}
                    onDragOver={dragOverHandler}
                    onDragLeave={dragLeaveHandler}
                    onDrop={dropHandler}
                    >
                    Отпустите для загрузки
                  </div>
            }        
        </div>
    );
};