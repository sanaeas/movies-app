import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Result({ title, poster, date, vote, movieId }) {
  let navigate = useNavigate();

  return (
    <div className='result' onClick={() => navigate(`/${movieId}`)}>
        <img src={`https://image.tmdb.org/t/p/w500${poster}`} className='poster' alt="" />
        <div className="movie__description">
            <h3 className="movie__title">{title}</h3>
            <h4 className="movie__date">{date}</h4>
            <p className="movie__vote"> <FontAwesomeIcon icon="thumbs-up" />  {vote}</p>
        </div>
    </div>
  )
}

export default Result