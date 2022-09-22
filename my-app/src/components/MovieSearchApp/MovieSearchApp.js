import React, { useEffect, useState } from 'react';
import axios from "axios";
import styled from 'styled-components';
import lodash from 'lodash'

// https://api.themoviedb.org/3/movie/550?api_key=21d860a2ad0306ee20feac9fbf893fbd
// https://api.themoviedb.org/3/search/movie?api_key=21d860a2ad0306ee20feac9fbf893fbd&query=''
//https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
const Container = styled.div`
    padding: 40px;
    .header{
        width: 100%;
        max-width: 400px;
        margin-left: auto;
        margin-right: auto;
    }
    .search {
        width: 100%;
        padding: 20px;
        border: 1px solid #7D6AFF;
        border-radius: 0.5rem;
        box-shadow: 0px 0px 0px 3px rgba(125, 106, 255, 0.2);
        color: black;
    }

    .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 50px;
        gap: 40px;
    }
`;


const MovieSearchApp = (props) => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");
    useEffect(() => {
        async function fecthData() {
            const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=21d860a2ad0306ee20feac9fbf893fbd&query='${query}'`);
            if (response.data.results) {
                setMovies(response.data.results);
            }
        }
        fecthData();
    }, [query]);
    const handleChane = lodash.debounce((e) => {
        setQuery(e.target.value);
    }, 500)
    return (
        <Container>
            <div className='header'>
                <input type="text" className='search' placeholder='Search Movie' onChange={handleChane} />
            </div>
            <div className='grid'>
                {movies.length > 0 &&
                    movies.map((item, index) =>
                        <MovieItem key={item.id} data={item}></MovieItem>
                    )}

            </div>
        </Container>
    );
};


const MovieWapper = styled.div`
        background-color: white;
        border-radius: 1rem;
        margin: 0 20px;
    .imgWapper{
        padding: 10px;
        width: 369px;
        height: 297px;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        overflow: hidden;
    }
    .footer {
        padding: 30px;
    }
    h3{
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        max-width: 329px;
    }
    p {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        max-width: 329px;
        line-height: 21px;
        margin-bottom: 24px;
        max-height: 70px;
        overflow: hidden;
     }

     .footer-rates {
        display: flex;
        align-items: center;
        gap: 12px;
     }
     span {
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
        color: #333333;
     }

`;


const MovieItem = (props) => {
    return <MovieWapper>
        <div className='imgWapper'>
            <img src={`https://image.tmdb.org/t/p/w500${props.data.poster_path}`} alt="" />
        </div>
        <div className='footer'>
            <h3>{props.data.title}</h3>
            <p>{props.data.overview}</p>
            <div className='footer-rates'>
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.66713 1.02447C7.7719 0.702008 8.2281 0.702009 8.33287 1.02447L9.71753 5.28602C9.76439 5.43023 9.89877 5.52786 10.0504 5.52786H14.5313C14.8703 5.52786 15.0113 5.96173 14.737 6.16102L11.1119 8.7948C10.9892 8.88393 10.9379 9.04191 10.9847 9.18612L12.3694 13.4477C12.4742 13.7701 12.1051 14.0383 11.8308 13.839L8.20572 11.2052C8.08305 11.1161 7.91695 11.1161 7.79428 11.2052L4.16918 13.839C3.89488 14.0383 3.52581 13.7701 3.63059 13.4477L5.01525 9.18612C5.06211 9.04191 5.01078 8.88393 4.88811 8.7948L1.26301 6.16102C0.988711 5.96173 1.12968 5.52786 1.46874 5.52786H5.9496C6.10123 5.52786 6.23561 5.43023 6.28247 5.28602L7.66713 1.02447Z" stroke="#FFB86C" strokeWidth="1.5" />
                </svg>
                <span> {props.data.vote_average}</span>
            </div>

        </div>
    </MovieWapper>
}

export default MovieSearchApp;