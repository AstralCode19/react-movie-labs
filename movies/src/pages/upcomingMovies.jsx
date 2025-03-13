import React from "react";
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

const UpcomingMovies = (props) => {

    const { data, error, isPending, isError  } = useQuery({
      queryKey: ['upcoming'],
      queryFn: getUpcomingMovies,
    })
    
    if (isPending) {
      return <Spinner />
    }
  
    if (isError) {
      return <h1>{error.message}</h1>
    }  
    
    const movies = data.results;
  
    return (
      <PageTemplate
        title="Discover Upcoming Movies"
        movies={movies}
        action={(movie) => {
          return <PlaylistAddIcon movie={movie} />
        }}
      />
    );
  };
  export default UpcomingMovies;