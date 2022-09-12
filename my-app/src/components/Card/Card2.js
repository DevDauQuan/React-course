import React from 'react';
import styled, { css } from "styled-components";

const StyledCard = styled.div`
    position: relative;
    .card__img{
        height: 400px;
    width: 100%;
    border-radius: 8px;
    img {
        display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
    }
}

    .card__content {
    position: absolute;
    width: calc(100% - 72px);
    left: 50%;
    transform: translate(-50%, 50%);
    bottom: 0;
    background-color: white;
    z-index: 10;
    border-radius: 20px;
    padding: 20px;
    }
    .card__info{  
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    }
    .card__user{
    display:flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 12px;
    img {
        width: 30px;
        height: 30px;
        border-radius: 100rem;
        object-fit: cover;
        flex-shrink: 0;
        }
    span {
        font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    color: #333333;
    }
    }
    .card__sub{
        display:flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    }
    .card__footer{
        display:flex;
    align-items:center;
    justify-content: space-between;
    }

    .footer__author{
        font-weight: 700;
    font-size: 18px;
    line-height: 27px;
    }
    .footer__quality{
        background: linear-gradient(86.88deg, #7D6AFF 1.38%, #FFB86C 64.35%, #FC2872 119.91%);
   ${props => props.secondary && css`
       background: linear-gradient(86.88deg, #c6ffdd 1.38%, #fbd786 64.35%, #f7797d 119.91%);

   `};
   -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 700;
    }
`;


const Card2 = (props) => {
    return (
        <StyledCard secondary={props.secondary}>
            <div className='card__img'>
                <img src="https://cdn.dribbble.com/users/2400293/screenshots/18733513/media/808ca1b009efd4781844b7e716e13edb.png?compress=1&resize=1000x750&vertical=top" alt="" />
            </div>
            <div className='card__content'>
                <div className='card__info'>
                    <div className='card__user'>
                        <img src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.6435-9/184647829_3646106872161756_430797708851709539_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=42SnT8dKvw4AX9y9joJ&tn=NH3DKOqCl0osxzXx&_nc_ht=scontent.fsgn5-3.fna&oh=00_AT-PNqYNT3c_qDkydDULP_YrL6ztX2hAoQHsvgc5tNJ9-w&oe=633FC9CE" alt="" />
                        <span >@zndrson</span>
                    </div>
                    <div className='card__sub'>
                        <img src="/coolicon.svg" alt="" />
                        <span>256</span>
                    </div>
                </div>

                <div className='card__footer'>
                    <span className='footer__author'>Cosmic Perspective</span>
                    <span className='footer__quality'>12,000 PSL</span>
                </div>
            </div>
        </StyledCard>
    );
};

export default Card2;