import { useState } from "react";

function Session() {
  const [number, setNumber] = useState(0);
  const [players, setPlayers] = useState<string[]>([]);

  const handleClick = () => {
    const input = document.getElementById("playerNumber") as HTMLInputElement;
    const value = Math.max(0, parseInt(input.value) || 0);

    setNumber(value);
    setPlayers(Array(value).fill(""));
  };

  const handleChange = (index: number, value: string) => {
    const newPlayers = [...players];
    newPlayers[index] = value;
    setPlayers(newPlayers);
  };

  return (
    <>
      <input type="number" id="playerNumber"/>
      <br/>

      <button onClick={handleClick}>
        Accept
      </button>

      {players.map((player, number) => (
        <div key={number}>
          <label>Joueur {number + 1}</label>
          <br/>

          <input
            type="text"
            placeholder="Mettre ton pseudo"
            value={player}
            onChange={(e) => handleChange(number, e.target.value)}
          />
        </div>
      ))}

      <button onClick={() => console.log(players)}>
        Valider les joueurs
      </button>
    </>
  )
}

export default Session
