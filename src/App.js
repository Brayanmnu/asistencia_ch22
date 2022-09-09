import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import Cartilla from './modules/Cartilla'
import Login from './modules/Login'


export default function App () {

  const[isCartilla, setIsCartilla] = useState(true);
  const[isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const loggedMakerJSON = window.localStorage.getItem('loggedMaker')
    if(loggedMakerJSON){
        setIsLogin(true)
    }else{
        setIsLogin(false)
    }
  }, [isLogin]);

  return (
    <Router>
      <Routes>
        <Route path={'/cartilla/:idMakerEvento'} exact element={<Cartilla setIsCartilla={setIsCartilla} isLogin={isLogin}/>} />
      </Routes>
      {isCartilla?<Login isLogin={isLogin} setIsLogin={setIsLogin}/>:null}
    </Router>
  )
   
}
