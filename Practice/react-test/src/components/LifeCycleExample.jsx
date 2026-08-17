import React, { useEffect, useState } from 'react';

const LifeCycleExample = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Component will mount.");
        
        return () => {
            console.log("Component will unmount");
            
        }
}, []);

useEffect(() => {
    console.log(`Count is: ${count}`);
    
},[count]);
  return (
    <div>
        <div>COUNT: {count}</div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default LifeCycleExample;