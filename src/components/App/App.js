// depend.
import React from 'react';

// styles
import style from './App.module.css';

// components
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import Main from "../Main/Main.js";


function App() {
  return (
    <div className={style.container}>
      
        <Header/>
        <Main/>
        <Footer/>
      
    </div>
  )
}

export default App;
