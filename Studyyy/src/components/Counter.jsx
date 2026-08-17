import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    
  return (
    <>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        > +
        </button>
        <h1>Count is {count}</h1>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => Math.max(0, count - 1))}
        > -
        </button>
    </>
  )
}

export default Counter;