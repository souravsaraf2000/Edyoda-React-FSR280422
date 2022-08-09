import React, {Component} from 'react'

class Home extends Component {
    state = {  } 
    render() { 
        // console.log(this.props)
        const {name, greetFunction} = this.props;
        return (
            <div>
                <h1>Home Component {name}</h1>
                <button onClick={()=>greetFunction('John')}>Call Greet Function</button>
            </div>
        );
    }
}
 
export default Home;