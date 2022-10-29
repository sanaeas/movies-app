import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Result from '../components/Result';
import WebSearch from '../assets/web_search.svg';

export default function Search() {
  const { keyword } = useParams();
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState('');
  localStorage.setItem("key", searched || keyword);

  async function fetchResults(searched) {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=6f1c37b08b5040534accd7ad3d899abd&query=${searched || keyword}`);
    const { results } = await res.json();
    const resultsA = results.filter((result) => result.poster_path !== null);
    setResults(resultsA);
  }

  useEffect(() => {
    fetchResults()
  }, [])

  return (
    <section id='search'>
        <div className="container">
            <div className="row">
                <div className='search__header'>
                    <h3 className='search__title'>Explore Now</h3>
                    <div className="search__container">
                        <input type="text" className="search__input" placeholder='Search for a movie, tv show....' onChange={event => setSearched(event.target.value)} onKeyDown={(event) => event.key === 'Enter' && fetchResults(searched)} />
                        <FontAwesomeIcon icon="search" className='search__icon' onClick={() => fetchResults(searched)} />
                    </div>
                </div>
                {
                  results.length !== 0 ? <>
                    <h3 className="results__title">Search results:</h3>
                    <div className="results">
                        {
                            results.map(result => <Result key={result.id} title={result.title} poster={result.poster_path} date={result.release_date} vote={result.vote_average} movieId={result.id} />)
                        }
                    </div>
                  </> :
                    <img src={WebSearch} className="search__img" />
                }
            </div>
        </div>
    </section>
  );
}
