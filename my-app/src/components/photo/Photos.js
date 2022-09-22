import React, { useEffect, useState } from 'react';
import axios from 'axios'
import styled from "styled-components";
import { useRef } from 'react';

//https://picsum.photos/v2/list
//https://picsum.photos/v2/list?page=2&limit=10
const GridPhoto = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    padding: 1.25rem;
    gap: 5px;
    .imageCover {
        padding: 0.75rem;
        background-color: rgb(255 255 255);
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
        border-radius: 0.5rem;
        height: 400px;
    }
    .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 0.5rem;
    }
`;
const Button = styled.button`  
    display: inline-block;
    padding-left: 5rem; /* 320px */
    padding-right: 5rem; /* 320px */
    padding-top: 1rem; /* 16px */
    padding-bottom: 1rem; /* 16px */
    background-color: rgb(147 51 234);
    color: white;
    font-size: 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
`;



const getPhoto = async (page) => {
    try {
        const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=8`);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

const Photos = () => {
    const [randomPhotos, setRandomPhotos] = useState([]);
    const [nextPage, setNextPage] = useState(1);
    const handleLoadMore = useRef({});
    handleLoadMore.current = async () => {
        const imgs = await getPhoto(nextPage);
        const newPhotos = [...randomPhotos, ...imgs]
        setRandomPhotos(newPhotos);
        setNextPage(nextPage + 1);
    }
    useEffect(() => {
        handleLoadMore.current();
    }, [])
    return (
        <div>
            <GridPhoto>
                {randomPhotos.length > 0 && randomPhotos.map((item, index) => (
                    <div key={item.id} className='imageCover'>
                        <img src={item.download_url} alt={item.author} className='image' />
                    </div>
                ))}
            </GridPhoto>
            <center>
                <Button className='button-Loadmore' onClick={handleLoadMore.current}>Load more</Button>
            </center>
        </div>
    );
};

export default Photos;