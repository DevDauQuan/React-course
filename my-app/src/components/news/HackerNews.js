import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import styled from "styled-components";
import lodash from 'lodash';
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
`;


const HackerNews = () => {
    const [hits, setHits] = useState([]);
    const [query, setQuery] = useState('react');
    const [loading, setLoading] = useState(true);
    const [errMessage, setErrMessage] = useState(``);

    const handleFetchData = useRef({});

    const handleUpdateQuery = lodash.debounce((e) => {
        setQuery(e.target.value);
    }, 500);

    handleFetchData.current = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`);
            setHits(response.data?.hits || []);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setErrMessage(`Having Error ${errMessage}`)
        }

    }
    useEffect(() => {
        handleFetchData.current();
    }, [query])
    return (
        <div>
            <Wapper>
                <input type="text" name="" className='form-text' onChange={handleUpdateQuery} defaultValue={query} />
                {loading &&
                    <div className='flex loading-container'>
                        <div className='loading-circle'></div>
                        <span>loading...</span>
                    </div>
                }
                {loading && errMessage && <p>{errMessage}</p>}
                {hits.length > 0 && hits.map((item, index) => {
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

export default HackerNews;