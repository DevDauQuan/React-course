import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    span {
        font-weight: 600;
    }
    p {
        display: inline-block;
        padding: 12px;
        background-color: black;
        color: white;
        border-radius: 1rem ;
    }
`;

const Tooltip = ({ children, text }) => {
    return (
        <Container>
            <TooltipContent>This is son's Tooltip </TooltipContent>
            <span>{text}</span>
        </Container>
    );
};

function TooltipContent({ children }) {
    return (
        <p>{children}</p>
    )
}

export default Tooltip;