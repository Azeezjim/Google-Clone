import React, {useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useResultContext } from '../context/ResultContextProvider';
import { Loading } from './Loading';

export const Results = () => {
  const {results, isLoading, setResults, searchTerm } = useResultContext();
  const location = useLocation()

  if(isLoading) return <Loading />;
  console.log("location", location.pathname);

  switch (location.pathname) {
    case '/search':
      return (
        
        <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
          {}
        </div>
      );  
      
      case '/images':
        return 'IMAGES';  

        case '/news':
          return 'NEWS';  

      case '/videos':
      return 'VIDEOS';  
      
    default:
      return 'ERROR';
  }
}
