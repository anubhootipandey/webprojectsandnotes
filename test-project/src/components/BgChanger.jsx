import React, { useState } from 'react';

const BgChanger = () => {
    const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl">
                <button onClick={() => setColor("red")} className="outline-none p-2 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}></button>
                <button onClick={() => setColor("green")} className="outline-none p-2 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}}></button>
                <button onClick={() => setColor("black")} className="outline-none p-2 rounded-full text-white shadow-lg" style={{backgroundColor: "black"}}></button>
                <button onClick={() => setColor("orange")} className="outline-none p-2 rounded-full text-white shadow-lg" style={{backgroundColor: "orange"}}></button>
                <button onClick={() => setColor("teal")} className="outline-none p-2 rounded-full text-white shadow-lg" style={{backgroundColor: "teal"}}></button>
                <button onClick={() => setColor("pink")} className="outline-none p-2 rounded-full text-white shadow-lg" style={{backgroundColor: "pink"}}></button>
            </div>
        </div>
    </div>
  )
}

export default BgChanger;