import React, {useEffect, useReducer, useRef, useState} from 'react';

/**
 * re-recreating interval each time the effect runs
 */
export function CounterDemoStaleClosureAnswer1() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const intervalRef = setInterval(() => {
            console.log(`setCount(${count + 1})`)
            setCount(count + 1);
        }, 1000);
        return () => {
            clearInterval(intervalRef);
        };
    }, [count]);

    return (
        <div>
            <h2>{count}</h2>
        </div>
    );
}

/**
 * using setter callback
 */
export function CounterDemoStaleClosureAnswer2() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const intervalRef = setInterval(() => {
            setCount(count => count + 1);
        }, 1000);
        return () => {
            clearInterval(intervalRef);
        };
    }, []);

    return (
        <div>
            <h2>{count}</h2>
        </div>
    );
}

/**
 * using setter callback with a complexe state
 */
export function CounterDemoStaleClosureAnswer3() {
    const [state, setState] = useState({
        count: 0,
        step: 5,
    });

    useEffect(() => {
        const intervalRef = setInterval(() => {
            setState(state => ({
                ...state,
                count: state.count + state.step
            }));
        }, 1000);

        return () => {
            clearInterval(intervalRef);
        };
    }, []);

    return (
        <div>
            <h2>{state.count}</h2>
        </div>
    );
}

/**
 * using reducer
 */
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment': {
            return ({
                ...state,
                count: state.count + state.step,
            });
        }
        default:
            return state;
    }
};
export function CounterDemoStaleClosureAnswer4() {
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        step: 5,
    });

    useEffect(() => {
        const intervalRef = setInterval(() => {
            dispatch({ type: 'increment' });
        }, 1000);
        return () => {
            clearInterval(intervalRef);
        };
    }, []);

    return (
        <div>
            <h2>{state.count}</h2>
        </div>
    );
}
