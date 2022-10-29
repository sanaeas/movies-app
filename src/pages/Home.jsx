import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MovieNight from '../assets/movie_night.svg';

function Home({}) {
  let navigate = useNavigate();
  const [keyword, setKeyword] = useState('');

  return (
    <section id='landing'>
        <div className="container">
            <div className="row">
                <h1 className="landing__title">Millions of Movies and TV shows to discover.</h1>
                <h2 className="landing__subtitle">Find the movie you have been looking for with <span className='colored'>Movies</span>.</h2>
                <div className="search__container">
                  <input type="text" className="search__input" placeholder='Search for a movie, tv show....' onChange={event => setKeyword(event.target.value)} onKeyDown={(event) => event.key === 'Enter' && navigate(`/search/${keyword}`)} />
                  <button className='search__btn' onClick={() => navigate(`/search/:${keyword}`)} ><FontAwesomeIcon icon="search" /></button>
                </div>
                <figure className='landing__img--wrapper'>
                    <img src={MovieNight} alt="" className='landing__img' />
                </figure>
            </div>
        </div>
    </section>
  );
}

export default Home;