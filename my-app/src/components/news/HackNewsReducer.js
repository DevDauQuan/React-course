/* eslint-disable no-lone-blocks */
import React, { useEffect, useReducer, useRef } from 'react';
import axios from 'axios';
import styled from "styled-components";
// import lodash from 'lodash';
//http://hn.algolia.com/api/v1/search?query=react

const Wapper = styled.div`
    width: 40%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    padding: 20px;
    border-radius: 0.5rem;
    background-color: white;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
.form-text{
        display: block;
        width: calc(100% - 40px);
        border: 1px solid #304043;
        /* border-color: rgb(107 114 128); */
        border-radius: 0.5rem;
        color: black;
        padding: 20px;
        margin-bottom: 20px;
        font-size: 20px;
        transition: all;
        
    }
    .form-text:focus{
            border-color: rgb(37 99 235);
        }
    .flex {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 16px;
    }
    .loading-circle{
        width: 2rem; /* 32px */
        height: 2rem;
        border-radius: 9999px;
        border: 2px solid #000;
        border-color:#000 ;
        border-width: 4px;
        border-right-width: 4px;
        border-right-color: transparent;
        animation: spin 1s linear infinite;
        margin-right: 12px;
    }
    .item {
        display: inline-block;
        font-size: 20px;
        font-weight: 500;
        padding: 12px;
        margin: 8px;
        border-radius: 0.5rem;
        background-color: #ccc;
    }

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

button {
    padding: 20px;
    margin: 0 8px 20px;
    background-color: blue;
    border: none;
    border-radius: 0.8rem;
    color: white;
    font-size: 18px;
    font-weight: 600;
    opacity: 0.8;
    cursor: pointer;
}
button:hover {
    opacity: 0.2;
}
`;
const initalState = {
    hits: [],
    query: 'react',
    loading: true,
    errMessage: '',
    url: "http://hn.algolia.com/api/v1/search?query=''"
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_DATA': {
            return { ...state, hits: action.payload };
        }
        case 'SET_LOADING': {
            return { ...state, loading: action.payload };
        }
        case 'SET_ERROR': {
            return { ...state, errMessage: action.payload };
        }
        case 'SET_QUERY': {
            return { ...state, query: action.payload };
        }
        case 'SET_URL': {
            return { ...state, url: action.payload };
        }

        default:
            break;
    }
}

const HackerNewsReducer = () => {
    const [state, dispatch] = useReducer(reducer, initalState);

    const handleFetchData = useRef({});
    handleFetchData.current = async () => {
        dispatch({
            type: "SET_LOADING",
            payload: true,
        });
        try {

            const response = await axios.get(state.url);
            dispatch({
                type: "SET_DATA",
                payload: response.data?.hits || []
            });
            dispatch({
                type: "SET_LOADING",
                payload: false,
            })
        } catch (error) {
            dispatch({
                type: "SET_LOADING",
                payload: false,
            })
            dispatch({
                type: "SET_ERROR",
                payload: `The error is`,
            })
        }

    }
    useEffect(() => {
        handleFetchData.current();
    }, [state.url])
    return (
        <div>
            <Wapper>
                <div className='flex'>
                    <input type="text" name="" className='form-text'
                        defaultValue={state.query}
                        onChange={(e) => dispatch({
                            type: "SET_QUERY",
                            payload: e.target.value,
                        })}
                    />
                    <button onClick={() => dispatch({
                        type: "SET_URL",
                        payload: `http://hn.algolia.com/api/v1/search?query=${state.query}`,
                    })}>FETCH</button>
                </div>
                {state.loading &&
                    <div className='flex loading-container'>
                        <div className='loading-circle'></div>
                        <span>loading...</span>
                    </div>
                }
                {!state.loading && state.errMessage && <p>{state.errMessage}</p>}
                {state.hits.length > 0 && state.hits.map((item, index) => {
                    if (!item.title || item.title.length <= 0) return null;
                    return (
                        <h3 key={item.id} className='item'> {item.title}</h3>
                    )
                }
                )}
            </Wapper>
        </div>
    );
};

export default HackerNewsReducer;