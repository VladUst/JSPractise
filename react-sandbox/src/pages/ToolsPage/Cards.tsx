import React, { useState } from 'react';

interface Card{
    id:number;
    order:number;
    text:string;
}

export const Cards = () => {
    const [cardList, setCardList] = useState<Card[]>([
        {id: 1, order: 3, text: 'КАРТОЧКА 3'},
        {id: 2, order: 1, text: 'КАРТОЧКА 1'},
        {id: 3, order: 2, text: 'КАРТОЧКА 2'},
        {id: 4, order: 4, text: 'КАРТОЧКА 4'},
    ]);
    const [currentCard, setCurrentCard] = useState<Card | null>(null);
    const dragStartHandler = (e: React.DragEvent<HTMLDivElement>, card: Card) => {
        setCurrentCard(card);
    }
    const dragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {

    }
    const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        (e.target as HTMLDivElement).style.background = 'white';
    }
    const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        (e.target as HTMLDivElement).style.background = 'lightgray';
    }

    const dragDropHandler = (e: React.DragEvent<HTMLDivElement>, card: Card) => {
        e.preventDefault();
        setCardList(cardList.map(c => {
            if(c.id === card.id){
                return {...c, order: (currentCard as Card).order}
            } else if (c.id === (currentCard as Card).id){
                return {...c, order: card.order}
            } else {
                return c;
            }
        }));
        (e.target as HTMLDivElement).style.background = 'white';
    }

    const sortCards = (a: Card, b: Card): number => {
        if(a.order > b.order){
            return 1;
        } else {
            return -1;
        }
    }
    return (
        <div className='cards-row'>
            {cardList.sort(sortCards).map(card => 
                <div 
                    onDragStart={(e) => dragStartHandler(e, card)}
                    onDragLeave={dragLeaveHandler}
                    onDragOver={dragOverHandler}
                    onDragEnd={dragEndHandler}
                    onDrop={(e) => dragDropHandler(e, card)}
                    draggable={true}
                    key={card.id}
                    className='card'
                >
                    {card.text}
                </div>    
            )}
        </div>
    );
};