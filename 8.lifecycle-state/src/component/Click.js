import React, { useState } from 'react'

function Click() {
    const [count, setCount] = useState(0);

    const increase = () => {
        return setCount(previous => previous + 1);
    }
    const decrease = () => {
        return setCount(count - 1);
    }
    if (count > 10 || count < 0) {
        setCount(count === 0)
            return (
                <div>
                    <button onClick={increase}>increase</button>
                    <button onClick={decrease}>decrease</button>
                    <h1>{count}</h1>
                </div>
            );
        } else {
            return (
                <div>
                    <button onClick={increase}>increase</button>
                    <button onClick={decrease}>decrease</button>
                    <h1>{count}</h1>
                </div>
            );
        }
    }


export default Click