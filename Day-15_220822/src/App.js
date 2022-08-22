import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import MovieCard from './MovieCard';
import './styles.css'

function App() {
  const [allMovies, setAllMovies] = useState([])
  const [searchedMovies, setSearchedMovies] = useState('')
  const [searchedMovieList, setSearchedMoviList] = useState([])

  useEffect(()=>{
    axios.get('https://www.omdbapi.com/?apikey=45f0782a&s=war')
    .then(res => setAllMovies(res.data.Search))
    .catch(err => console.log(err))
  },[])

  useEffect(()=>{
    if(searchedMovies.length >= 3){
      axios.get(`https://www.omdbapi.com/?apikey=45f0782a&s=${searchedMovies}`)
      .then(res => setSearchedMoviList(res.data.Search))
      .catch(err => console.log(err))
    }
  },[searchedMovies])

  return (
    <div>
      <div className='searchContainer'>
        <input 
          type='search'
          placeholder='Search for Movie Title ... '
          className='searchBox'
          onChange={(e)=>setSearchedMovies(e.target.value)}
        />
      </div>
      {
        searchedMovies.length < 3 && <p className='error'>Enter atleast 3 characters</p>
      }
      <div className='moviesWrapper'>
        {
          searchedMovieList && searchedMovieList.length !==0 && searchedMovies!=='' ?
          searchedMovieList.map((movie,idx) => <MovieCard movie={movie} idx = {idx}/>)
          :
          allMovies.map((movie,idx) => <MovieCard movie={movie} idx = {idx}/>)
        }
      </div>
    </div>
  );
}

export default App;
