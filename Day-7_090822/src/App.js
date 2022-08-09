import React from 'react'
import './App.css';
import Counter from './Counter';
import Home from './Home';

class App extends React.Component{

  state = {
    a : 10
  }

  greet = () => {
    this.setState((prevState)=>{
      return {
        a : prevState.a + 1
      }
    })
  }

  render(){
    return(
      <div>
        <h1>Home Component</h1>
        <h2>a: {this.state.a}</h2>
        <button onClick={this.greet}>Greet Students</button>
        {/* <Counter/> */}
        {/* <Home name="Edyoda" greetFunction = {this.greet}/> */}
      </div>
    )
  }
}

export default App;
