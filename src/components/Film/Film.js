import React, { useState, useEffect } from "react";
import './Film.css'
import logo from '../../img/images.png'

const Film = ({film})  => {
  const [linkFilm, setLinkFilm] = useState('')

  useEffect(() => {
    if (film.flatform == 1) {
      const embed_link = film.film_link.split(/[=&]/)[1]
      setLinkFilm('https://www.youtube.com/embed/'+embed_link)
    }
  }, []);

  return (
    <div className="Film">
      <iframe width="300" height="215" src={linkFilm} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <div className="FilmInfo">
        <p>{film.film_title}</p>
        <p>Shared by: {film.shared_by}</p>
        <span>Like: {film.number_of_like} Unlike: {film.number_of_unlike}</span>
        <p>Description:</p>
        <p>{film.film_description}</p>
      </div>
    </div>
  )
}

export default Film;