import React, { useState } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Help from './Help';
import NavBar from './NavBar';
import Hooks from './Hooks';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true)
  return (
    <div className="App">
      {/* <h1>App Component</h1> */}
      {/* <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={isLoggedIn ? <About/> : <Navigate to='/'/>} />
          <Route path='/help' element={isLoggedIn ? <Help/> : <Navigate to='/'/>} />
          <Route path = '*' element={<h1>404 Not Found</h1>}/>
        </Routes>
      </BrowserRouter>
      <p>Login Value : {String(isLoggedIn)}</p>
      <button onClick={()=>setLoggedIn(!isLoggedIn)}>{isLoggedIn ? 'Log Out':'Login'}</button> */}
      <Hooks/>
    </div>
  );
}

export default App;
