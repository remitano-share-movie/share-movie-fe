import React, { useState, useEffect } from "react";
import logo from '../../img/images.png'
import './Header.css'
import { useLocalContext } from "../../context/context";
import authApi from "../../apis/auth.api";
import cookie from "react-cookies";
import {useNavigate} from 'react-router-dom'

const Header = ({loginInfo})  => {
  const navigate = useNavigate()
  const { authLogin, setAuthLogin, dataInfo, setDataInfo} = useLocalContext();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const login = async (e) => {
    try {
      e.preventDefault()

      let response = null
      if (isLogin) {
        response = await authApi.login({ username, password })
        setIsLogin(false)
      }
      else if (isRegister) {
        response = await authApi.register({ username, password })
        setIsRegister(false)
      }
      
      if (response.data !== undefined) {
        setDataInfo(response.data);
        setAuthLogin(true)
      }
      // set access_token to cookie
      cookie.save('access_token', response.data?.access_token);
      cookie.save('user_data', response.data);
      alert(response.message)

    }
    catch (err) {
        console.log("ERROR login, err: ", err)

        if (Object.keys(err).length > 0) {
            alert(err?.message)
        }
        else {
            // An error has occurred
            alert('An error has occurred')
        }
    }
  }

  const register = async (e) => {
    try {
      e.preventDefault()

      let response = null
      if (isLogin) {
        response = await authApi.login({ username, password })
        setIsLogin(false)
      }
      else if (isRegister) {
        response = await authApi.register({ username, password })
        setIsRegister(false)
      }
      
      if (response.data !== undefined) {
        setDataInfo(response.data);
        setAuthLogin(true)
      }
      // set access_token to cookie
      cookie.save('access_token', response.data?.access_token);
      cookie.save('user_data', response.data);
      alert(response.message)

    }
    catch (err) {
        console.log("ERROR login, err: ", err)

        if (Object.keys(err).length > 0) {
            alert(err?.message)
        }
        else {
            // An error has occurred
            alert('An error has occurred')
        }
    }
  }

  const logout = async () => {
    try {
      await authApi.logout()
      cookie.remove("user_data");
      cookie.remove("access_token");
      setDataInfo({});
      setAuthLogin(false)
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
  };

  const handleNavigate = (e) => {
    e.preventDefault()
    navigate('/share')
  }

  return (
    <div className="Header">
      <div>
        <img src={logo} height="50" width='50'/>
        <span>Funny Movies</span>
      </div>
      {authLogin ? 
        <div>
          <span>{dataInfo?.username}</span>
          <button onClick={handleNavigate}>Share a movie</button>
          <button onClick={logout}>Log out</button>
        </div>
        :
        <div className="Auth">
          <form onSubmit={login}>
            <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="username" />
            <input onChange={(e) => setPassword(e.target.value)} type="text" placeholder="password" />
            <button onClick={(e) => setIsLogin(true)}>Login</button>
            <button onClick={(e) => setIsRegister(true)}>Register</button>
          </form>
        </div>
      }
    </div>
  )
}

export default Header;