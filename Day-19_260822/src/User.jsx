import axios from 'axios';
import React from 'react';
import {connect} from 'react-redux'
import { userData } from './actionReducers';

function User(props) {
    console.log(props)
    const {getUserData} = props
    const getData = () => {
        axios.get('https://dummyjson.com/users')
        .then(res => getUserData(res.data.users))
        .catch(err => console.log(err))
    }
    return ( 
        <>
            <h1>User Component</h1>
            <button onClick={getData}>Get User Data</button>
        </>
     );
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserData : (data)=>dispatch(userData(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);