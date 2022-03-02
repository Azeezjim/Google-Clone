import React, { creatContext, useContext, useState} from "react";

const ResultContext = creatContext();
const baseURL = 'https://travel-advisor.p.rapidapi.com/locations/v2';

export const ResultContextProvider = ({ children  }) => {
  const [ results, setResults ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ searchTerm, setSearchTerm ] = useState('');

  const setResult = async(type) => {
    setIsLoading(true);

    const response = await fetch(`${baseURL}${type}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': 'b6c8631778msh1238fe0ffb53795p15151ajsn88bc1ee3042e'    
      },
    });
    const data = await response.json();

    setResults(data);
    isLoading(false);
  }

  return (
    <ResultContext.Provider value={{setResult, results, searchTerm, setSearchTerm, isLoading}}>
      {children }
    </ResultContext.Provider>
  )
}

export const useResultContext = () => useContext(ResultContext)