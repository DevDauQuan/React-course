import React from 'react';
// import './Button.scss';
import style from './Button.module.css'

const Button = (props) => {
    return (
        // <button className={`button ${props.className || ""}`}>
        //     {props.children}
        // </button>
        <button className={`${style.button} ${props.secondary ? style.buttonSecondary : ""}`}>
            {props.children}
        </button>
    );
};

export default Button;