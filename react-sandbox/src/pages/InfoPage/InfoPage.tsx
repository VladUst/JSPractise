import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { PhotoItem } from '../../components/Items/PhotoItem';
import List from '../../components/List/List';
import { IPhoto } from '../../models/IPhoto';

export const InfoPage = () => {
    const [photos, setPhotos] = useState<IPhoto[]>([]);
    const [fetching, setFetching] = useState<boolean>(true);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalCount, setTotalCount] = useState<any>(0);
    useEffect(function getUsers() {
        if(fetching){
            axios.get<IPhoto[]>('https://jsonplaceholder.typicode.com/photos', { params: {
                _limit: 10,
                _page: currentPage
            }}).then(response => {
                setCurrentPage(currentPage => currentPage + 1);
                setPhotos([...photos, ...response.data]);
                setTotalCount(Number(response.headers['x-total-count']));
            }).finally(() => setFetching(false));
        }
    }, [fetching]);

    const handleScroll = (e: any) => {
        const totalHeight = e.target.documentElement.scrollHeight;
        const scrolled = e.target.documentElement.scrollTop;
        const clientHeight = window.innerHeight;
        if(totalHeight - (scrolled + clientHeight) < 200 && photos.length < totalCount){
            setFetching(true);
        }
    }

    useEffect(function scrollHandler() {
        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        }
    }, [photos]);

    return (
        <List items={photos} renderItem={(photo: IPhoto) => <PhotoItem key={photo.id} photo={photo}/>}/>
    );
};