import React, {useEffect, useRef, useState} from 'react';

/**
 * Stale Closure example :
 * empty deps -> count is outdated !
 */
export function CounterDemoStaleClosure() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setInterval(() => {
            console.log(`setCount(${count + 1})`)
            setCount(count + 1);
        }, 1000);
    }, []);

    return (
        <div>
            <h2>{count}</h2>
        </div>
    );
}
