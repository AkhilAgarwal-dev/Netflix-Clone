
import MovieList from './MovieList';
import { useSelector } from "react-redux";

const movies = useSelector(store=>store.movies)
const SecondaryContainer = () => {
  return (
    movies.nowPlayingMovies &&(
    <div className='bg-black'>
      <div className='-mt-52 pl-12 realtive z-20'>
     < MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
     < MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
     < MovieList title={"Popular"} movies={movies.popularMovies}/>
     < MovieList title={"Upcoming"} movies={movies.nowPlayingMovies}/>
     < MovieList title={"Horror Movies"} movies={movies.nowPlayingMovies}/>
     </div>
    </div>
    )
  )
}

export default SecondaryContainer;