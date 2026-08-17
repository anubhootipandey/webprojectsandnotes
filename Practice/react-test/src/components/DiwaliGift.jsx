import React, { useState } from "react";

const DiwaliGift = () => {
  const [value, setValue] = useState([]);
  const [selectedGift, setSelectedGift] = useState("");
  const [isAssigned, setIsAssigned] = useState(false);

  let gifts = ["Chocolate", "Necklace", "Bracelet", "Dress"];

  const handleSubmit = (e) => {
    e.preventDefault();
    const fname = e.target.fname.value;
    const friendName = [...value, fname];
    setValue(friendName);
  };

  const remove = (id) => {
    const filteredVal = value.filter((_, index) => index !== id);
    setValue(filteredVal);
  };

  const handleAssignGift = () => {
    if (isAssigned) {
      alert("Gift is already assigned!");
      return;
    }

    const randomGifts = Math.floor(Math.random() * gifts.length);
    setSelectedGift(gifts[randomGifts]);
    setIsAssigned(true);
  };

  const handleShuffleGift = () => {
    if(isAssigned){
      const randomGifts = Math.floor(Math.random() * gifts.length);
      setSelectedGift(gifts[randomGifts]);
    }
  };

  const handleReset = () => {
    setSelectedGift(""); 
    setIsAssigned(false); 
  };

  return (
    <div>
      <h1>Diwali Gift Exchange</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fname"
          placeholder="Enter your friends name..."
        />
        <button>Add people</button>
      </form>
      <div>
        {value.map((val, id) => {
          return (
            <>
              <ul key={id}>
                <li style={{ listStyle: "none", display: "flex", alignItems: "center", gap:"5px" }}>
                  {val} - {selectedGift ? <p className="text-xl font-bold">{selectedGift}</p> : <p>No gifts assigned</p>} <button onClick={() => remove(id)}>Remove</button>{" "}
                </li>
              </ul>
              <div style={{ display: "flex", gap: "5px", marginTop: "10px" }}>
                <button onClick={handleAssignGift}>Assign Gifts</button>
                <button onClick={handleShuffleGift}>Shuffle Gifts</button>
                <button onClick={handleReset}>Reset</button>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default DiwaliGift;
