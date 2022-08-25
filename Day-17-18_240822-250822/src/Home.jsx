import axios from 'axios'
import React, { useState } from 'react'
import {connect} from 'react-redux'

function Home(props) {
    // const [newName, setName] = useState('')
    // const [newAge, setAge] = useState('')
    // console.log(props)
    // const {name, age, updateName, updateDetails} = props
    const getData = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => props.updateState(res.data))
        .catch(err => console.log(err))
    }
    console.log(props)
    // return ( 
    //     <>
    //         <h1>Home Component {name} {age}</h1>
    //         <input type='text' placeholder='Enter new name' onChange={(e)=>setName(e.target.value)}/>
    //         {/* <button onClick={()=>updateName(newName)}>Update Name</button> */}
    //         <input type='number' placeholder='Enter new age' onChange={(e)=>setAge(e.target.value)}/>
    //         <button onClick={()=>updateDetails(newName, newAge)}>Update details</button>
    //     </>
    // );
    return(
        <>
            <button onClick={getData}>Get Data</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateName : (newName)=>{
            dispatch({
                type: 'UPDATE_NAME',
                payload: newName
            })
        },
        updateDetails : (name,age)=>{
            dispatch({
                type: 'UPDATE_NAME_AND_AGE',
                payload: {
                    name,
                    age
                }
            })
        },
        updateState : (data) => {
            dispatch({
                type: 'API_DATA',
                payload: data
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);