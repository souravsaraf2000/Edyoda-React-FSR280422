import React, {Component} from 'react'

class Home extends Component {
    state = {  } 
    render() { 
        console.log('Child Component Called')
        console.log(this.props)
        const {name, getData} = this.props;
        return (
            <div>
                <h1>Home Component {name}</h1>
                <button onClick={()=>getData([1,2,3,4,5])}>Call Function</button>
            </div>
        );
    }
}
 
export default Home;