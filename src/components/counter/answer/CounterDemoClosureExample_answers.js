import React, {useEffect, useRef, useState} from 'react';

/**
 * Closure example.
 * Make functional component work like class component
 */
export class CounterDemoClassComponentV1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    componentDidUpdate() {
        setTimeout(() => {
            console.log(`count: ${this.state.count}`);
        }, 2000);
    }

    increment = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));
    }

    render() {
        return (
            <div>
                <h2>Class Component:</h2>
                <p>you clicked {this.state.count} times</p>
                <button onClick={this.increment}>
                    Click me
                </button>
            </div>
        );
    }
}

export function CounterDemoFunctionalComponentV1() {
    const [count, setCount] = useState(0);
    const latestCount = useRef(count);

    useEffect(() => {
        latestCount.current = count;
        setTimeout(() => {
            console.log(`count: ${latestCount.current}`);
        }, 2000);
    });

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    }

    return (
        <div>
            <h2>Functional Component:</h2>
            <p>you clicked {count} times</p>
            <button onClick={increment}>
                Click me
            </button>
        </div>
    );
}
