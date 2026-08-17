import {useState, useEffect} from "react";

export default function App() {
    const [count, setCount] = useState(0);
    const [isMounted, setIsMounted] = useState(true);

    useEffect(() => {
        //mounting phase
        if(!isMounted) return;
        console.log("component mounted!");

        //unmounting phase(Cleanup function)
        return()=> {
            console.log("Component unmounted!");
        }
    }, [isMounted]);

    useEffect(() => {
        //updating phase
        if(count === 10){
          console.log("Performing Cleanup...");
          setIsMounted(false);
        } else{
          console.log("Computed updated! Current counts is :", count);
        }
    }, [count]);

    const increment = () => {
      if(count < 10){
        setCount(count + 1);
      }
    }
    
  return (
      <div style={{textAlign: "center", marginLeft: "600px"}}>
          <h1>{count}</h1>
          <button onClick={increment}>Increase</button>
      </div>
      )
}
