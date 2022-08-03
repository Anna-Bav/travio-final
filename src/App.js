// import React from "react";
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Layout from './components/Layout'



function App() {
  return (

    <Router>

      <Layout />
      
    </Router>
    
//     {<div className={"Authorization"}>
//        <button>Авторизация</button>
// </div> 

  );
}

export default App;
