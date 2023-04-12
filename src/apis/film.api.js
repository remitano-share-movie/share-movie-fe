import {AxiosBasic} from "../services/api";
import urls from './urls'

const list_films = async () => {
    return AxiosBasic({
        url: urls.list_films,
        method: 'GET',
    })
}

const add_film = async ({film_link, film_title, flatform}) => {
    return AxiosBasic({
        url: urls.add_film,
        method: 'POST',
        data:{
            film_link,
            film_title,
            flatform
        }
    })
}

const filmApi = {
  list_films,
  add_film,
}

export default filmApi