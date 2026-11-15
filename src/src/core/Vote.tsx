import { useState } from "react";

const CARTES = ["0", "1/2", "1", "2", "3", "5", "8", "13", "20", "40", "100", "?", "café"];

function Vote({ players }: { players: string[] }) {
  const [current, setCurrent] = useState(0); // numéro du joueur qui vote
  const [votes, setVotes] = useState<string[]>([]); // votes déjà faits

  const voter = (carte: string) => {
    setVotes([...votes, carte]);
    setCurrent(current + 1);
  };

  // Tant que tous n'ont pas voté : on montre les cartes au joueur courant
  if (current < players.length) {
    return (
      <>
        <h2>Au tour de {players[current]}</h2>
        {CARTES.map((c) => (
          <button key={c} onClick={() => voter(c)}>{c}</button>
        ))}
      </>
    );
  }

  return <h2>Tous les joueurs ont voté</h2>;
}

export default Vote;