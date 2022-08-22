import React, { useState } from 'react'
import './styles.css'

function MovieCard(props) {
    const [showTitle, setShowTitle] = useState(null)
    const {movie,idx} = props
    return ( 
        <div 
            className='moviesCard'
            onMouseEnter = {()=>setShowTitle(idx)}
            onMouseLeave = {()=>setShowTitle(null)}
        >
            <img src={movie.Poster} alt = 'poster' className='poster'/>
            {showTitle === idx && 
            <div className='moviesTitle'>
                <p>{movie.Title}</p>
            </div>}
        </div>
    );
}

export default MovieCard;