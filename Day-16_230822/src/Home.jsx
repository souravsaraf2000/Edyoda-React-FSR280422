import React from 'react';
import PropTypes from 'prop-types';

function Home(props) {
    const {data} = props
    return ( 
        <>
            <h1>Home Component</h1>
        </>
    );
}

Home.propTypes = {
    data: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.func])
}
export default Home;