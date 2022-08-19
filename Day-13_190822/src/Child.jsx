import React, { useEffect } from 'react'

function Child() {
    useEffect(() => {
      console.log('Child Mounted')
      return () => {
        console.log('Component Unmounted')
      }
    })
    
    return ( 
        <div>
            <h1>I am Child Component</h1>
        </div>
     );
}

export default Child;