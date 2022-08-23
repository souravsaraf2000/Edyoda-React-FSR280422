import React, { useState } from 'react'
import './App.css';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: ''
  })
  const [showDetails, setShowDetails] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowDetails(true)
  }

  const handleState = (e, property) => {
    if(property === 'name'){
      setFormData({
        ...formData,
        name: e.target.value
      })
    }
    else if(property === 'email'){
      setFormData({
        ...formData,
        email: e.target.value
      })
    }
    else{
      setFormData({
        ...formData,
        contact: e.target.value
      })
    }
  }
  console.log(formData)

  return (
    <div className="App">
      {/* <h1>Contact Us</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <input 
            type='text' 
            placeholder = 'Enter your name'  
            required
            onChange={(e) => handleState(e,'name')}
          />
        </div>
        <div>
          <input 
            type='email' 
            placeholder = 'Enter your email id'  
            required
            onChange={(e) => handleState(e,'email')}
          />
        </div>
        <div>
          <input 
            type='number' 
            placeholder = 'Enter contact number' 
            required
            onChange={(e) => handleState(e,'contact')}
          />
        </div>
        <div>
          <input 
            type='submit' 
            value='Submit'
          />
        </div>
      </form>
      {
        showDetails && 
        <div>
          <h2>Submitted Details</h2>
          <p>Name : {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Contact: {formData.contact}</p>
        </div>
      } */}
      <Home data = {handleState}/>
      <Button>Hey there</Button>
    </div>
  );
}

export default App;