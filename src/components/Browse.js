import { useSelector } from 'react-redux';
import Header from './Header'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import GPTSearch from './GPTSearch';


const Browse = () => {
  const ShowGptSearch = useSelector(store=>store.gpt.ShowGptSearch)
  //Fetch data from TDMB Api and update the store 
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
      <Header />
       {
        ShowGptSearch ? (<GPTSearch />) :(<><MainContainer/>
        <SecondaryContainer /></> )
       }
      <MainContainer/>
      <SecondaryContainer />
      <GPTSearch />
    </div>
  )
}

export default Browse;