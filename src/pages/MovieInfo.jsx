import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function MovieInfo() {
  const { movieId } = useParams();
  const [details, setDetails] = useState();

  async function getDetails() {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=6f1c37b08b5040534accd7ad3d899abd`);
    const data = await res.json();
    setDetails(data);
  }

  useEffect(() => {
    getDetails();
  }, [])

  return (
    <section id='movie__info'>
        <div className="container">
            <div className="row">
                <div className="movie__selected--top">
                    <Link to={`/search/${localStorage.getItem("key")}`} className="movie__link">
                        <FontAwesomeIcon icon="arrow-left" />
                    </Link>
                    <Link to={`/search/${localStorage.getItem("key")}`} className="movie__link">
                        <h2 className="movie__selected--title--top">Back</h2>
                    </Link>
                </div>
                <div className="movie__selected">
                    <figure className="movie__selected--figure">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${details?.poster_path}`}
                            alt=""
                            className="movie__selected--img"
                        />
                    </figure>
                    <div className="movie__selected--description">
                        <h2 className="movie__selected--title">
                            {details?.title}
                        </h2>
                        <h4 className='movie__selected--date'>{details?.release_date}</h4>
                        <p className='movie__selected--language'>Spoken languages: {details?.spoken_languages.map((language, index) => <span key={index} className='language'>{language.english_name}</span>)}</p>
                        <p className='movie__selected--overview' >{details?.overview}</p>
                        <p >{details?.genres.map((genre, index) => <span key={index} className='genre'>{genre.name}</span>)}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default MovieInfo;