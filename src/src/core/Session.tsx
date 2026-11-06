import { useState } from "react";

function Session() {
  const [number, setNumber] = useState(0);

  const handleClick = () => {
    const input = document.getElementById("playerNumber") as HTMLInputElement;
    setNumber(parseInt(input.value) || 0);
  };

  return (
    <>
      <input type="number" id="playerNumber"/>
      <br/>

      <button onClick={handleClick}>
        Accept
      </button>

      <p>Player number : {number}</p>
    </>
  )
}

export default Session
