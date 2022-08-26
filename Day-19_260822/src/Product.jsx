import React from 'react';
import {connect} from 'react-redux'
import { productData } from './actionReducers';
import axios from 'axios'

function Product(props) {
    const {getProductData} = props
    const getData = () => {
        axios.get('https://dummyjson.com/products')
        .then(res => getProductData(res.data.products))
        .catch(err => console.log(err))
    }
    return ( 
        <>
            <h1>Product Component</h1>
            <button onClick={getData}>Get Product Data</button>
        </>
     );
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProductData : (data)=>dispatch(productData(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);