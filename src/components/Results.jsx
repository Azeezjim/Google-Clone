import React, {useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useResultContext } from '../context/ResultContextProvider';
import { Loading } from './Loading';

export const Results = () => {
  const {results, isLoading, getResults, searchTerm} = useResultContext();
  const location = useLocation();

  useEffect(() => {
    if(searchTerm) {
      if(location.pathname === './videods') {
        getResults(`/search/q=${searchTerm} videos`)
      } else{
        getResults(`/${location.pathname}/q=${searchTerm}&num=40`)
      }
    }
  },[searchTerm, location.pathname, getResults])
  if(isLoading) return <Loading />;
  console.log("location", location.pathname);

  switch (location.pathname) { 
    case '/search':
      return (
        <div className="sm:px-56 flex flex-wrap justify-between space-y-6">
          {results?.results?.map(({ link, title }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm">{link.length > 30 ? link.substring(0, 30) : link}</p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700  ">{title}</p>
              </a>
            </div>
          ))}
        </div>
      );  
      
      case '/images':
        return (
          <div className=' flex flex-wrap justify-center items-center '>
            {results?.image_results?.map(({image, link: {href, title}}, index ) => (
              <a className='sm:p-3 p:5' href={href} key={index} target="_blank" ref="noreferrer" >
                <img src={image?.src} alt={title} loding="lazy" />
                <p className='w-36 break-words text-sm mt-2'>
                  {title}
                </p>
              </a>
            ))}
          </div>
        );  

        case '/news':
          return 'NEWS';  

      case '/videos':
      return 'VIDEOS';  
      
    default:
      return 'ERROR';
  }
}
