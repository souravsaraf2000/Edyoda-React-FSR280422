import axios from 'axios';
import React, {useEffect} from 'react'

function Demo() {
    // useEffect(() => {
    //     axios.get('https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json')
    //     .then(res => console.log(res.data))
    //     .catch(err => console.log(err))
    // }, [])
    
    return ( 
        <div>
           <h1>Demo Component</h1> 
        </div>
     );
}

export default Demo;