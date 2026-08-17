import React, { useState } from 'react';

const Popover = () => {
    const [showPopover, setShowPopover] = useState(false);

  return (
    <div>
        <button onClick={() => setShowPopover(!showPopover)}>Hover me</button>
        {showPopover && (
            <div style={{border: "2px solid #ccc", marginTop: "10px", width: "200px", padding: "6px", backgroundColor: "#ccc"}}>
                This is PopOver content!
            </div>
        )}
    </div>
  );
};

export default Popover;