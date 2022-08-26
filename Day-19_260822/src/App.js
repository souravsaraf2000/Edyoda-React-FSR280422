import React from 'react';
import About from './About';
import './App.css';
import { HoC } from './HoC';
import Home from './Home';
import Product from './Product';
import User from './User';

function App(props) {
  console.log(props)
  return (
    <div className="App">
      {/* <h1>App Component</h1> */}
      {/* <Home/>
      <About/> */}
      <User />
      <Product/>
    </div>
  );
}

export default HoC(App);
