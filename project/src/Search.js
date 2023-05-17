import React from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRatingComponent from 'react-star-rating-component';

const Search = ({getData,getRate,rating}) => {
   const  onStarClick=(nextValue, )=> {
    getRate(nextValue);
      }
  return (
    <div>
      <input type='text' placeholder='search '  onChange={(e)=>getData(e.target.value)}/>
       <Button variant="success">Success</Button>
       <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rating}
          onStarClick={onStarClick}
        />
    </div>
  )
}

export default Search
