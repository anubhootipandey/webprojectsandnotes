import {React,useState, useEffect} from 'react'
import './Collections.css'
import axios from 'axios';

function Electronic() {
  const [state, setstate] = useState([{}]);
  useEffect(() => {
   apicall()
    
  }, [])
  

  async function apicall(){
    const response= await axios.get("https://fakestoreapi.com/products/category/electronics");
    console.log(response.data);
    setstate(response.data);
  }

  
  return (
    <>
    <div className="collections">
    <h1>Electronic gadgets</h1>
    <div className="collectionscard">
     {state.map((data)=>{
      return(
        <>
        <div className="ccard">
      <img src={data.image}></img>
      <p>{data.title}</p>
      <span>
      <p1>{data.price}</p1>
        <button>Buy now</button>
      </span>
      </div>    
        </>
      )
     })}  
    </div>
    </div>
    </>
  )
}



export default Electronic