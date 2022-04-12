import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './component/About';
import Error from './component/Error';
import Navbar from './Memes/Navbar'
import Memes from './Memes/Memes'
import React, { useEffect, useState } from 'react';
import Alert from './component/Alert';
import Note from './component/Note';
import Footer from './component/Footer';
import Meme2 from './Next Page Meme/Meme2';
// import Loading from './component/Loader';
import ReactLoading from 'react-loading';

function App() {

  const [mode, setmode] = useState('light')

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundImage = "url('https://www.wamoresearch.org/wp-content/uploads/2018/04/cool-background-designs-26.jpg')"
      showAlert('Crazy Dark Mode Enabled', 'success')

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


  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  })
  
  return (
    <>
    <center>
    {isLoading==true?
        <ReactLoading className='spinner' type={"bars"} color={"#064663"} height={100} width={100} />:
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
      }
      </center>
    </>
  );
}

export default App;
