import React, { useEffect, useState } from 'react'
import Child from './Child'

function Hooks() {
    const [counter, setCounter] = useState(0)
    const [showChild, setShowChild] = useState(true)

    //CDM
    useEffect(()=>{
        console.log('Use Effect Hook Called')
    },[]) // dependency list

    // CDU & SCU
    useEffect(()=>{
        console.log('I am imitataing component did update')
    }, [counter])


    return ( 
        <div>
            <h1>Hooks Component</h1>
            {/* <button onClick={()=>setCounter(counter-1)}> - </button>
            <h4>{counter}</h4>
            <button onClick={()=>setCounter(counter+1)}> + </button> */}
            {
                showChild ? <Child /> : ''
            }
            <button onClick={()=>setShowChild(!showChild)}>{showChild ? 'Unmount Child':'Mount Child'}</button>
        </div>
     );
}

export default Hooks;