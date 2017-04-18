import React from 'react';

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            result: 0
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    componentDidMount() {
        this.setState({ result: parseInt(this.props.initialvalue, 10) });
    }

    increment() {        
        const newVal = this.state.result + 1;
        this.setState({ result: newVal });
    }

    decrement() {
        const result = this.state.result - 1;
        this.setState({ result });
    }

    render() {
        return (
            <div>
                <h1>{this.props.initialvalue}</h1>
                <div>{this.state.result}</div>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        )
    }
}

export default Counter;