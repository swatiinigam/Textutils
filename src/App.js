import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import React, { useState } from 'react';

 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert=" You can manipulate your text here!"/>
    <div className="container my-3">
    <TextForm heading="Enter the text to analyze below" mode={mode}/>
    
    </div>
    </> 
  );
}

export default App;