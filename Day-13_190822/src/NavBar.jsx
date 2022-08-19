import React from 'react';
import { Link } from 'react-router-dom'

function NavBar() {
    return ( 
        <div style={{display: 'flex', justifyContent: 'space-around', backgroundColor:'gray', padding:'20px'}}>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/help'>Help</Link>
        </div>
     );
}

export default NavBar;