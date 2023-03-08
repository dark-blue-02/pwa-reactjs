import React, { useEffect } from 'react';
import './App.css';
import { userLocalStorage } from './data';
import { Outlet, useNavigate } from 'react-router-dom';
import { routes } from './ui/navigation/routers/main_router';
import MainNavbar from './ui/app/navbar';

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    if (isUserHadLoggedIn()) navigate(routes.home)
    else navigate(routes.login)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div className="App flex flex-col w-screen h-screen">
    <Outlet />
    <MainNavbar />
  </div>
}


function isUserHadLoggedIn() {
  const userInfo = userLocalStorage.getUserInfo()
  return userInfo.username != null && userInfo.password != null
}

export default App;
