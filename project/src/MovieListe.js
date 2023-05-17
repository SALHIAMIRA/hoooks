import React from 'react'
import MovieCarte from './MovieCarte'

const MovieListe = ({movies}) => {
  return (
    <div>
      { movies.map((movie)=> <MovieCarte movie={movie}/>)}
    </div>
  )
}

export default MovieListe
