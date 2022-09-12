import React from 'react';

const Cell = (props) => {
    const { value, onClick, className } = props;

    return (
        <div className={`game-cell ${className}`} onClick={onClick}>
            {value}
        </div>
    );
};

export default Cell;