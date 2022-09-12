import React, { useState } from 'react';
import { goDone } from '../../helper';
import Board from './Board';
import "./style.css"
const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = goDone(board);
    const handleClick = (index) => {
        const boardCopy = [...board];
        if (winner || boardCopy[index]) {
            return;
        }

        boardCopy[index] = xIsNext ? "X" : "O";
        setBoard(boardCopy);
        setXIsNext(!xIsNext);
    };

    const handelResetGame = () => {
        setBoard(Array(9).fill());
        setXIsNext(true);

    };
    return (
        <div>
            <Board cells={board} onClick={handleClick}></Board>
            <button onClick={handelResetGame}>Reset Game</button>
        </div>
    );
};

export default Game;