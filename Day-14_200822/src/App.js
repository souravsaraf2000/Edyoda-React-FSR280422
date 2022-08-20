import React from 'react'
import './App.css';
import Demo from './Demo';
import axios from 'axios';

class App extends React.Component {
  state = {  } 

  getData = async () => {
    const response = await axios.get('https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json')
    const data = response.data
    console.log(data)
  }

  render() { 
    return (
      <div>
        <Demo/>
        <button onClick = {this.getData}>Get Data</button>
      </div>
    );
  }
}
 
export default App;
