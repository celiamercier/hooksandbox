import {useEffect, useState} from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('use effect');
        const intervalRef = setInterval(() => {
            console.log('increment counter');
            setCount(count => count + 1);
        }, 1000);

        /*return () => {
            console.log('cleanup');
            clearInterval(intervalRef);
        };*/
    }, []);

    console.log('render');
    return (<p>counter: {count}</p>);
}

function UseEffectUnmountDemo() {
    const [unmount, setUnmount] = useState(false);

    const doUnmount = () => {
        setUnmount(true);
    };

    return (
        <div>
            <button onClick={doUnmount}>Unmount</button>
            { !unmount && <Counter />}
        </div>
    );
};

export default UseEffectUnmountDemo;
