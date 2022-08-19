import React from 'react';
import { useNavigate } from 'react-router-dom'

function Button() {
    const navigate = useNavigate()
    return ( 
        <button onClick={()=>navigate('/home')}>Home Page</button>
     );
}

export default Button;