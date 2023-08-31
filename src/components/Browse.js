import Header from './Header'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  //Fetch data from TDMB Api and update the store 
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer />
    </div>
  )
}

export default Browse;