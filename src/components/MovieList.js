import React from 'react'
import MovieCard from './MovieCard'
const MovieList = ({title, movies}) => {
  console.log("Movies")
  return (
    <div className='px'>
      <h1 className='text-3xl py-4 text-white'>{title}</h1>
      <div className='flex overflow-x-scroll'>
        <div className='flex'>
        {movies?.map(movies=><MovieCard key={movies.id} posterPath={movies[0].poster_path}/>)} 
        </div>
      </div>
      </div>
  )
}

export default MovieList