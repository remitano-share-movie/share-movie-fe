import {AxiosBasic} from "../services/api";
import urls from './urls'

const login = async ({username, password}) => {
    return AxiosBasic({
        url: urls.login,
        method: 'POST',
        data:{
            username,
            password,
        }
    })
}

const register = async ({username, password}) => {
    return AxiosBasic({
        url: urls.register,
        method: 'POST',
        data:{
            username,
            password,
        }
    })
}

const logout = async () => {
  return AxiosBasic({
      url: urls.logout,
      method: 'POST'
  })
}

const authApi = {
  login,
  register,
  logout,
}

export default authApi