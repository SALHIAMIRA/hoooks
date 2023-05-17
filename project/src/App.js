import './App.css';
import { useState } from 'react';
import MovieListe from './MovieListe';
import MovieCarte from './MovieCarte';
import Search from './Search';
import Add from './Add';

function App() {
  const [word,setWord]=useState("")
  const [rating, setRating]=useState(1)
  const [movies,setMovies]=useState([
    { id:1,
      title: "The Shawshank Redemption",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        postUrl:
        "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
      rate: "4",
    
    },
    { id: 2,
      title: "The Godfather",
      description:
        "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
        postUrl:
        
        "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
      rate:"5",
      
  
    },
    { id: 3,
      title: "The spiderman",
      description:
        "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
      postUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/4d/Godfather_part_II.jpg",
      rate: "3",
   
      
  },
  ])

  const getData=(key)=>{
setWord(key)
  }
  const getRate=(rate)=>{
setRating(rate)
  }

 const addMovie=(newMovie)=>{
  setMovies([...movies,newMovie])

 } 
  return (
    <div className="App">
     <Search getData={getData} getRate={getRate}/>
     <Add addMovie={addMovie}/>
      <MovieListe addMovie={addMovie} movies={movies.filter((movie)=> movie.rate >= rating && movie.title.toLowerCase().includes(word.trim().toLowerCase()))}  />
    
    </div>
  );
}

export default App;
