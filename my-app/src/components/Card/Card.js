import React from 'react';
import styled, { css } from "styled-components";

const StyledCard = styled.div`
    position: relative;
`;

const CardImage = styled.div`
    height: 400px;
    width: 100%;
    border-radius: 8px;
`;

const CardImg = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
`;

const CardContent = styled.div`
    position: absolute;
    width: calc(100% - 72px);
    left: 50%;
    transform: translate(-50%, 50%);
    bottom: 0;
    background-color: white;
    z-index: 10;
    border-radius: 20px;
    padding: 20px;
`;

const CardInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`;

const CardUser = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 12px;
`;

const UserAve = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 100rem;
    object-fit: cover;
    flex-shrink: 0;
`;

const UserName = styled.span`
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    color: #333333;

`;

const CardFooter = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
`;

const DescriName = styled.h3`
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
`;

const CardQuality = styled.span`
   background: linear-gradient(86.88deg, #7D6AFF 1.38%, #FFB86C 64.35%, #FC2872 119.91%);
   ${props => props.secondary && css`
       background: linear-gradient(86.88deg, #c6ffdd 1.38%, #fbd786 64.35%, #f7797d 119.91%);

   `};
   -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 700;
`;

const CardSub = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
`;
const Card = (props) => {
    return (
        <StyledCard>
            <CardImage>
                <CardImg src="https://cdn.dribbble.com/users/2400293/screenshots/18733513/media/808ca1b009efd4781844b7e716e13edb.png?compress=1&resize=1000x750&vertical=top" alt="" />
            </CardImage>
            <CardContent>
                <CardInfo>
                    <CardUser>
                        <UserAve src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.6435-9/184647829_3646106872161756_430797708851709539_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=42SnT8dKvw4AX9y9joJ&tn=NH3DKOqCl0osxzXx&_nc_ht=scontent.fsgn5-3.fna&oh=00_AT-PNqYNT3c_qDkydDULP_YrL6ztX2hAoQHsvgc5tNJ9-w&oe=633FC9CE" alt="" />
                        <UserName>@zndrson</UserName>
                    </CardUser>
                    <CardSub>
                        <img src="/coolicon.svg" alt="" />
                        <span>256</span>
                    </CardSub>
                </CardInfo>

                <CardFooter>
                    <DescriName>Cosmic Perspective</DescriName>
                    <CardQuality secondary={props.secondary}>12,000 PSL</CardQuality>
                </CardFooter>
            </CardContent>
        </StyledCard>
    );
};

export default Card;