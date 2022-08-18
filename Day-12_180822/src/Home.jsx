import React from 'react';

class Home extends React.Component { 
    componentDidMount(){
        console.log('Component Did Mount called!!')
      }
    componentWillUnmount(){
        console.log('Component will unMount called!!')
    }
    render() { 
        return (
            <div>
                <h1>Home Component</h1>
            </div>
        );
    }
}
 
export default Home;