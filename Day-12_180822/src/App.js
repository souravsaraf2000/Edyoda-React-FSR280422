import axios from 'axios';
import React, {Component} from 'react'
import './App.css';
import Counter from './Counter';
import Home from './Home';

class App extends Component {
  state = { 
    showComponent: true
  }
  
  componentDidMount() { 
    // const data = {
    //   'title' : 'Hey there! This is the first put request that we are making!!'
    // }
    // axios.post('https://dummyjson.com/posts/add',data)
    // .then(res => console.log(res.data))
    // .catch(err => console.log(err)) 
    // const options = {
    //   method: 'POST',
    //   headers: {
    //     'Content-type':'application/json'
    //   },
    //   body: JSON.stringify(data)
    // }
    // fetch('https://dummyjson.com/posts/add',options)
    // .then(res=>res.json())
    // .then(data => console.log(data))
    // axios.put('https://dummyjson.com/posts/1', data)
    // .then(res => console.log(res.data))
    // .catch(err => console.log(err))
    // axios.delete('https://dummyjson.com/posts/1')
    // .then(res => console.log(res.data))
    // .catch(err => console.log(err))
  }
  
  render() { 
    return (
      <div>
        {/* {
          this.state.showComponent && <Home/>
        }
        <button 
          onClick={()=>this.setState({showComponent:!this.state.showComponent})}
        >
            {this.state.showComponent?'Unmount':'Mount'}
        </button> */}
        <Counter />
      </div>
    );
  }
}
 
export default App;