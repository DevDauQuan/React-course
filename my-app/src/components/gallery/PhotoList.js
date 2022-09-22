import React from 'react';
import { useGallery } from '../../context/gallery-context';
import styled from "styled-components";
import PropTypes from 'prop-types';

const Container = styled.div`
    padding-top: 2.5rem; /* 40px */
    padding-bottom: 2.5rem; /* 40px */
    padding-left: 1.25rem; /* 20px */
    padding-right: 1.25rem; /* 20px */
    .grid-4{
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 20px;
    }
`;

const PhotoList = () => {
    const { photos } = useGallery();
    // console.log(cardItems);
    return (
        <Container>
            <div className='grid-4'>
                {photos.length > 0 && photos.map((item) =>
                    <PhotoItem key={item.id} info={item}></PhotoItem>
                )}
            </div>
        </Container>
    );
};

const ItemWapper = styled.div`
    position: relative;
    height: 300px;
    cursor: pointer;
    :hover span  {
        opacity: 1;
        visibility: visible;
    }
    :hover button  {
        opacity: 1;
        visibility: visible;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    span {
        position: absolute;
        right: 20px;
        top: 20px;
        z-index: 10;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;

    }
    .max-w-f{
        max-width: 100%;
    }
    button{
        position: absolute;
        padding: 12px 18px;
        font-size: 16px;
        font-weight: 600;
        background-color: white;
        color:black;
        cursor: pointer;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        border: none;
        border-radius: 8px;
        opacity: 0;
        visibility: hidden;
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;

        :hover {
            background-color: #D1512D;
        }
    }
`;

const PhotoItem = ({ info: { url, id, isFavorite } }) => {
    const { toggleLike, addToCard } = useGallery();

    return (
        <ItemWapper>
            <img src={url} alt="" />
            <span>
                <svg width="42" height="38" viewBox="0 0 42 38" fill="none" xmlns="http://www.w3.org/2000/svg" className='max-w-f' onClick={() => toggleLike(id)}>
                    <path d="M0.166626 11.5C0.166108 8.47984 1.37993 5.58633 3.53499 3.47045C5.69005 1.35458 8.60534 0.19405 11.625 0.249979C15.2027 0.230979 18.6166 1.74826 21 4.41665C23.3833 1.74826 26.7972 0.230979 30.375 0.249979C33.3946 0.19405 36.3099 1.35458 38.4649 3.47045C40.62 5.58633 41.8338 8.47984 41.8333 11.5C41.8333 22.6583 28.5437 31.0833 21 37.75C13.4729 31.0271 0.166626 22.6666 0.166626 11.5Z"
                        fill={`${isFavorite ? "#FC2872" : "#fff"}`} />
                </svg>

            </span>
            <button onClick={() => addToCard({ url, id, isFavorite })}>Add to Card</button>
        </ItemWapper>
    )
}

PhotoItem.propTypes = {
    url: PropTypes.string,
    id: PropTypes.number,
    isFavorite: PropTypes.bool,

};
export default PhotoList;