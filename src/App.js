import React from 'react';
import './App.scss';

import Navbar from "./components/navbar/navbar";
import TourList from "./components/tourList/tourList";


function App() {
  return (
    <div>
      <Navbar/>
      <TourList/>
    </div>
  );
}

export default App;
