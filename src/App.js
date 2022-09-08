import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import Inicio from './modules/Inicio'

export default function App () {
  return (
    <Router>
      <Routes>
        <Route path={'/cartilla/:idMakerEvento'} exact element={<Inicio/>} />
      </Routes>
    </Router>
  );
}
