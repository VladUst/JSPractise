import React from 'react';
import { IPost } from '../../models/IPost';
import { postApi } from '../../services/PostService';
import List from '../../components/List/List';
import PostItem from '../../components/Items/PostItem';

const PostContainer = () => {
    // RTK query кэширует данные и не будет дублировать 2 одинаковых запроса даже если они исходят из разных компонентов
    const {data: posts, error, isLoading, refetch} = postApi.useFetchAllPostsQuery(100, 
        /* лонгпулинг для постоянного запроса данных каждую секунду
        {
            pollingInterval: 1000
        } */
    );
    const [createPost, {error: createError, isLoading: isCreateLoading}] = postApi.useCreatePostMutation();
    const [deletePost, {}] = postApi.useDeletePostMutation();
    const [updatePost, {}] = postApi.useUpdatePostMutation();
    const handleCreate = async () => {
        const title = prompt();
        await createPost({title, body: title} as IPost);
    }
    const handleRemove = async (post: IPost) => {
        await deletePost(post);
    }
    const handleUpdate = async (post: IPost) => {
        await updatePost(post);
    }
    const errorMessage = error ? <h1>Fetching error</h1> : null;
    const loader = isLoading ? <h1>Loading...</h1> : null;
    const content = !(error || isLoading) 
        ? <List items={posts} renderItem={(post: IPost) => <PostItem update={handleUpdate} remove={handleRemove} key={post.id} post={post}/>}/>
        : null;
    //если данные нужно загрузить заново не из кэша, то необходимо вызвать refetch
    return (
        <div>
            <button onClick={handleCreate}>Создать пост</button>
            <button onClick={refetch}>Перезагрузка</button>
            {errorMessage}
            {loader}
            {content}
        </div>
    );
};

export default PostContainer;