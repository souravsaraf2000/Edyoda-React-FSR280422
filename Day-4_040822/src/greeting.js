import React from 'react'
import { Home } from './components'

const Greeting = (props) => {
    console.log(props)
    const {firstName,lastName} = props
    return (
        <div>
            <h1 style={{backgroundColor: 'lightblue'}}>Hello {`${firstName} ${lastName}`} </h1>
            <h2>We are in day 4 !!</h2>
            <Home/>
        </div>
    )
}

export default Greeting;