import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './component/About';
import Error from './component/Error';
import Navbar from './Memes/Navbar'
import Memes from './Memes/Memes'
import React, { useState } from 'react';
import Alert from './component/Alert';
import Note from './component/Note';
import Footer from './component/Footer';
import Meme2 from './Next Page Meme/Meme2';

function App() {

  const [mode, setmode] = useState('light')

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#133B5C'
      showAlert('Dark Mode Enabled', 'success')

    } else {
      setmode('light')
      document.body.style.backgroundColor = '#EEEEEE'
      showAlert('Light Mode Enabled', 'success')
    }
  }

  const [alert, setalert] = useState(null)

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1000);
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="EMOTICONS APP" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="App">
          <Routes>
            <Route path='/' element={<Memes mode={mode} showAlert={showAlert} />} />
            <Route path='/about' element={<About mode={mode} />} />
            <Route path='/note' element={<Note mode={mode} />} />
            <Route path='*' element={<Error />} />
            <Route path='/meme2' element={<Meme2 mode={mode}/>}/>
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
