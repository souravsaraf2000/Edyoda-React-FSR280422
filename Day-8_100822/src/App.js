import axios from 'axios';
import React from 'react'
import './App.css';
import Counter from './Counter';
import Home from './Home';

class App extends React.Component{

  constructor(){
    super()
    this.state = {
      userNames : [],
      a: 10
    }
    console.log('Constuctor is called')
  }

  componentDidMount(){
    console.log('Component Did Mount Called')
    axios.get('https://dummyjson.com/users')
    .then(res => {
      let users = []
      res.data.users.map(user=>users.push(user.firstName))
      // this.setState({
      //   userNames: users
      // })
    })
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('From Should component update')
    console.log('Our current state:',this.state)
    console.log('Updated State:',nextState)
    if(this.state.a!==nextState.a){
      return true
    }
    else{
      return false
    }
  }

  render(){
    console.log('Render is called')
    return(
      <div>
        {/* {
          this.state.userNames.length!==0 && 
          this.state.userNames.map(name=><p>{name}</p>)
        } */}
        {/* <Home userNames = {this.state.userNames.length!==0?this.state.userNames:null}/> */}
        <h1>a:{this.state.a}</h1>
        <button onClick={()=>this.setState({a:10})}>Update A</button>
      </div>
    )
  }
}

export default App;
