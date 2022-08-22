import React from 'react'
import { useParams } from 'react-router-dom';

function Home() {

    const {id} = useParams()

    console.log(id)

    return ( 
        <h1 style={{color: 'white'}}>I am Home Component id : {id}</h1>
    );
}

export default Home;