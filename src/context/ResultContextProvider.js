import React, { createContext, useContext, useState} from "react";

const ResultContext = createContext();
const baseURL = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({ children  }) => {
  const [ results, setResults ] = useState([]);  
  const [ isLoading, setIsLoading ] = useState(false);
  const [ searchTerm, setSearchTerm ] = useState('Most expensive');

  const getResults = async(type) => {
    // setIsLoading(true);

    const response = await fetch(`${baseURL}${type}`, {
      method: 'GET',
      headers: {
        'x-user-agent': 'desktop',
        'x-proxy-location': 'EU',
        'x-rapidapi-host': 'google-search3.p.rapidapi.com',
        'x-rapidapi-key': '689dbe7078msh4d2868af5f0ac77p12edf7jsn82cb238b21ca'
      }
    });
    const data = await response.json();

    setResults(data);
    isLoading(false);
  }

  return (
    <ResultContext.Provider value={{getResults, results, searchTerm, setSearchTerm, isLoading}}>
      {children }
    </ResultContext.Provider>
  )
}

export const useResultContext = () => useContext(ResultContext)