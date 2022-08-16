import axios from 'axios';
import React, { PureComponent } from 'react'
import './App.css';

class App extends PureComponent {
  state = { 
    users: [],
    userName: '',
    updatedList : []
  } 

  componentDidMount() { 
    axios.get('https://dummyjson.com/users')
    .then(res => this.setState({
      users: res.data.users
    }))
    .catch(err => console.log(err))
  }

  // componentDidUpdate(){
  //   let filteredUsers = this.state.users.filter(user => user.firstName.toLowerCase().includes(this.state.userName.toLowerCase()))
  //   console.log(filteredUsers)
  // }

  updateUsersList = (e) => {
    let filteredUsers = this.state.users.filter(user => user.firstName.toLowerCase().includes(this.state.userName.toLowerCase()))
    this.setState({updatedList:filteredUsers, userName: e.target.value})
  }

  render() { 
    return (
      <div>
        <input type='text' placeholder='Enter users first name' onChange={(e)=>this.updateUsersList(e)}/>
        {
          this.state.userName!== '' || this.state.updatedList.length !== 0 ? 
          this.state.updatedList.map(user => <p key={user.id}>{user.firstName} {user.lastName}</p>)
          :
          this.state.users.map(user => <p key={user.id}>{user.firstName} {user.lastName}</p>)
        }
      </div>
    );
  }
}
 
export default App;