import React from 'react';
import styled from 'styled-components';
import { useGallery } from '../../context/gallery-context';


const Container = styled.div`
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
    .card-col{
        display: inline-flex;
        column-gap: 20px;
        justify-content: space-between;
        align-items: center;
    }
    img{
        width: 40px;
        height: 40px;
        border-radius: 100%;
        object-fit: cover;
    }
    button {
        padding: 12px;
        border-radius: 8px;
        background-color: red;
        color: white;
        font-size: 16px;
        font-weight: 600;
        border: none;
        cursor: pointer;
    }
`;
const CardList = () => {
    const { cardItems, removefromCard } = useGallery();
    // console.log(cardItems);
    return (
        <Container>
            {cardItems?.length > 0 &&
                cardItems.map((item) => (
                    <div className="card-col" key={item.id}>
                        <img src={item.url} alt="" />
                        <button onClick={() => removefromCard(item.id)}>Delete</button>
                    </div>
                ))}
        </Container>
    );
};

export default CardList;