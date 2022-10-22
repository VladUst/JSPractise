import React, { useState } from 'react';

interface BoardItem{
    id: number;
    title: string;
}

interface Board {
    id: number;
    title: string;
    items: BoardItem[] | null;
}

const initialBoard: Board[] = [
    {id: 1, title: 'Сделать', items: [{id: 1, title:'Пойти в магазин'}, {id: 2, title: 'Выпить пиво'}]},
    {id: 2, title: 'В процессе', items: [{id: 3, title:'Писать код'}, {id: 4, title: 'Смотреть видосы'}]},
    {id: 3, title: 'Выполнено', items: [{id: 5, title:'Изучить списки'}, {id: 6, title: 'Позавтракать'}]}
];

export const Kanban = () => {
    const [boards, setBoards] = useState<Board[]>(initialBoard);
    const [currentBoard, setCurrentBoard] = useState<Board>({id: 1, title: 'Сделать', items: [{id: 1, title:'Пойти в магазин'}, {id: 2, title: 'Выпить пиво'}]});
    const [currentItem, setCurrentItem] = useState<BoardItem | null>(null);
    const dragStartHandler = (e: React.DragEvent<HTMLDivElement>, board: Board, item: BoardItem) => {
        setCurrentBoard(board);
        setCurrentItem(item);
    }
    const dragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {
        (e.target as HTMLDivElement).style.boxShadow = 'none';
    }
    const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        (e.target as HTMLDivElement).style.boxShadow = 'none';
    }
    const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        if((e.target as HTMLDivElement).className === 'board__item'){
            (e.target as HTMLDivElement).style.boxShadow = '0 2px 3px gray';
        }
    }

    const dragDropHandler = (e: React.DragEvent<HTMLDivElement>, board: Board, item: BoardItem) => {
        e.preventDefault();
        e.stopPropagation();
        const currentIndex = currentBoard?.items?.indexOf(currentItem as BoardItem);
        currentBoard?.items?.splice(currentIndex as number, 1);
        const dropIndex = board?.items?.indexOf(item);
        board?.items?.splice(dropIndex as number + 1, 0, currentItem as BoardItem);
        setBoards(boards.map(b => {
            if (b.id === board.id){
                return board;
            } else if (b.id === (currentBoard as BoardItem).id) {
                return currentBoard;
            } else {
                return b;
            }
        }));
        (e.target as HTMLDivElement).style.boxShadow = 'none';
    }

    const dropCardHandler = (e: React.DragEvent<HTMLDivElement>, board: Board) => {
        e.preventDefault();
        board.items?.push(currentItem as BoardItem);
        const currentIndex = currentBoard?.items?.indexOf(currentItem as BoardItem);
        currentBoard?.items?.splice(currentIndex as number, 1);
        setBoards(boards.map(b => {
            if (b.id === board.id){
                return board;
            } else if (b.id === (currentBoard as BoardItem).id) {
                return currentBoard;
            } else {
                return b;
            }
        }));
    }

    return (
        <div className='cards-row'>
            {boards.map(board => 
                <div className='board' 
                    key={board.id}
                    onDragOver={dragOverHandler}
                    onDrop={(e) => dropCardHandler(e, board)}
                    >
                    <div className="board__title">{board.title}</div>
                    {board.items?.map(item => 
                        <div className='board__item'
                            onDragStart={e => dragStartHandler(e, board, item)}
                            onDragLeave={dragLeaveHandler}
                            onDragOver={dragOverHandler}
                            onDragEnd={dragEndHandler}
                            onDrop={(e) => dragDropHandler(e, board, item)}
                            key={item.id}
                            draggable={true}
                        >
                            {item.title}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
