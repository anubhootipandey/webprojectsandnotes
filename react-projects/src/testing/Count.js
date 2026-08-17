import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Count = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Component rendered successfully.");
    }, []);

    // const btnClick = () => {
    //     setCount(count + 1); 
    //     setCount(count + 1); 
    // };

    const btnClick = () => {
        setCount(count => count + 1); // as a callback use kiya h to count ki value 1 h yha pe
        setCount(count => count + 1); // yha par who count ki value 1 ko as a argument leke add kr dega so count is 2
    };

  return (
    <div>
        <button onClick={btnClick}>Click me</button>
        <p>You click {count} times.</p>
    </div>
  )
};

export default Count;