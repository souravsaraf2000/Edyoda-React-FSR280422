import React from 'react';

class Counter extends React.Component {
    state = { 
        count: 0
    } 

    incrementCounter = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrementCounter = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    resetCounter = () => {
        this.setState({
            count: 0
        })
    }

    render() { 
        return (
            <div>
                <h1>{this.state.count}</h1>
                <div>
                    <button onClick={this.incrementCounter}>Increment Count</button>
                    <button onClick={this.decrementCounter}>Decrement Count</button>
                </div>
                <button onClick={this.resetCounter}>Reset Counter</button>
            </div>
        );
    }
}
 
export default Counter;