import logo from './logo.svg';
import "./Components/Styles/GlobalStyle.css";
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'


function App() {

  let [mode , setMode] = useState('light'); 

  let togglemode = ()=>{
    if(mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      document.body.style.color = 'white'
    }

    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
    }
  }

  return (
    <>
    <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
    <TextForm mode={mode}/>
    </>
  );
}

export default App;
