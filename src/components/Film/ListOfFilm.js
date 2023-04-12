import React, { useState, useEffect } from "react";
import filmApi from "../../apis/film.api";
import { useLocalContext } from "../../context/context";
import Film from "./Film";

const ListOfFilm = () => {
  // const {listFilms, setListFilms} = useLocalContext();
  const [listFilms, setListFilms] = useState([])
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await filmApi.list_films()
        if (response) {
          setListFilms(response.data);
          
        }
      } catch (err) {}
    };
    fetchData();
  }, []);

  const getListFilms = async () => {
    
  }

  return (
    <div style={{marginLeft: '60px'}}>
      {listFilms.map((ele, i) => (
        <div key={i}>
          <Film film={ele}/>
        </div>
      ))}
    </div>
  )
}

export default ListOfFilm;