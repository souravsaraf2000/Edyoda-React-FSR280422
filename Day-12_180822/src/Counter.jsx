import React, { useState } from 'react'

function Counter() {
    const [value, updateValue] = useState(0)
    return ( 
        <div>
            <h1>Counter Component</h1>
            <div style={{display: 'flex'}}>
                <button onClick = {()=>updateValue(value + 1)}>Increment</button>
                <h2>{value}</h2>
                <button onClick = {()=>updateValue(value - 1)}>Decrement</button>
            </div>
            <button onClick = {()=>updateValue(0)}>Reset</button>
        </div>
     );
}

export default Counter;