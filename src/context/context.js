import { createContext, useContext, useState } from "react";
import cookie from 'react-cookies';

const AddContext = createContext();

export function useLocalContext() {
  return useContext(AddContext);
}

export function ContextProvider({ children }) {
  const [dataInfo, setDataInfo] = useState(cookie.load('user_data'));
  const [authLogin, setAuthLogin] = useState(false); 
  const [listFilms, setListFilms] = useState([])
  
  const value = {
    dataInfo, setDataInfo,
    authLogin, setAuthLogin,
    listFilms, setListFilms,
  };
  return <AddContext.Provider value={value}>{children}</AddContext.Provider>;
}
