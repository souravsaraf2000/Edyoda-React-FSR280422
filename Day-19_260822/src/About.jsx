import React from 'react'
import {connect} from 'react-redux'

function About(props) {
    const {name, age, updateAge} = props
    return ( 
        <>
            <h1>About Component {name} {age}</h1>
            <button onClick={updateAge}>Update Age</button>
        </>
    );
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateAge : ()=>{
            dispatch({
                type: 'UPDATE_AGE',
                payload: 55
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(About);