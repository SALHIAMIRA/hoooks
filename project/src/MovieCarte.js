import React from 'react'
import "./moviecart.css"
import StarRatingComponent from 'react-star-rating-component';

const MovieCarte = ({movie}) => {
  return (
    <div>
      <div className="movie_card" id="bright">
  <div className="info_section">
    <div className="movie_header">
      <img className="locandina" src={movie.postUrl}/>
      <h1>{movie.title}</h1>
    
      <span className="minutes">117 min</span>
      <p className="type">Action, Crime, Fantasy</p>
    </div>
    <div className="movie_desc">
      <p className="text">
      {movie.description}
      </p>
      <StarRatingComponent 
          name="rate1" 
          starCount={(5)}
          value={movie.rate}
        />
      
    </div>
  </div>
  <div className="blur_back bright_back"></div>
</div>
    </div>
  )
}

export default MovieCarte
