import React from 'react';
import './List.css';
interface ListProps<T> {
    items: T[] | undefined;
    renderItem: (item: T) => React.ReactNode;
}

export default function List<T>(props: ListProps<T>) {
    return (
        <div className="list">
            {props.items?.map(props.renderItem)}
        </div>
    );
};