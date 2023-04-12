import React, { useState, useEffect } from "react";
import filmApi from "../../apis/film.api";
import { useNavigate } from "react-router-dom";

const ShareFilm = ({children})  => {
  const navigate = useNavigate()
  const [url, setUrl] = useState('')
  const [title, setTitle] = useState('')

  const handleShare = async e => {
    e.preventDefault()
    try {
      await filmApi.add_film({film_link: url, film_title: title, flatform: 'youtube'})
      navigate('/')
      //console.log(cookie.load('access_token'));
    } catch (err) {
      console.log("ERROR login, err: ", err);

      if (Object.keys(err).length > 0) {
        alert(err?.message);
      } else {
        // An error has occurred
        alert("An error has occurred");
      }
    }
  }

  return (
    <div className="">
      <form onSubmit={handleShare}>
        <label>Title <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title" /></label>
        <label>YouTube Link <input onChange={(e) => setUrl(e.target.value)} type="text" placeholder="Link" /></label>
        <button>Add</button>
      </form>
    </div>
  )
}

export default ShareFilm;