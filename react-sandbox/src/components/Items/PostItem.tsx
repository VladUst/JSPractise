import React, { FC } from 'react';
import { IPost } from '../../models/IPost';

interface PostItemProps {
    post: IPost;
    remove: (post: IPost) => void;
    update: (post: IPost) => void;
}

const PostItem: FC<PostItemProps> = ({post, remove, update}) => {
    const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        remove(post)
    }

    const handleUpdate = (e: React.MouseEvent<HTMLDivElement>) => {
        const title = prompt() || '';
        update({...post, title});
    }
    
    return (
        <div className='post' onClick={handleUpdate}> 
            {post.id}. {post.title}
            <button onClick={handleRemove}>Удалить</button>
        </div>
    );
};

export default PostItem;