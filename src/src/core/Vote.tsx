import { useState } from "react";
import { GetRuleResult } from "../rules";
import { contientQuestion, supprimerCafe } from "../rulesFunctions";

const CARTES = ["0", "1/2", "1", "2", "3", "5", "8", "13", "20", "40", "100", "?", "café"];

function Vote({
  players,
  rule,
  onValidated,
}: {
  players: string[];
  rule: string;
  onValidated: (difficulte: number) => void;
}) {
  const [current, setCurrent] = useState(0); // numéro du joueur qui vote
  const [votes, setVotes] = useState<string[]>([]); // votes déjà faits
  const [revealed, setRevealed] = useState(false);
  const [turn, setTurn] = useState(1);

  // La règle réellement utilisée à ce tour
  const regleAppliquee =
    turn === 1
      ? "unanimité (au premier tour, toutes les règles se jouent à l'unanimité)"
      : rule === "mediane"
      ? "médiane"
      : "stricte (unanimité)";

  const voter = (carte: string) => {
    setVotes([...votes, carte]);
    setCurrent(current + 1);
  };

  const refaireLeVote = () => {
    setCurrent(0);
    setVotes([]);
    setRevealed(false);
    setTurn(turn + 1);
  };

  // Tant que tous n'ont pas voté : on montre les cartes au joueur courant
  if (current < players.length) {
    return (
      <>
        <h2>Tour {turn} : au tour de {players[current]}</h2>
        <p>Règle appliquée : {regleAppliquee}</p>
        {CARTES.map((c) => (
          <button key={c} onClick={() => voter(c)}>{c}</button>
        ))}
      </>
    );
  }

  const tousCafe = supprimerCafe(votes).length === 0;
  const result = revealed && !tousCafe ? GetRuleResult(votes, rule, turn) : null;

  let raison = "";
  if (result && result.statut === -1) {
    if (contientQuestion(supprimerCafe(votes)) === -1) {
      raison = "Au moins un joueur a joué « ? » : la fonctionnalité n'est pas comprise, il faut en discuter avant de revoter.";
    } else if (turn === 1) {
      raison = "Au premier tour, tous les votes doivent être identiques (unanimité), quelle que soit la règle.";
    } else {
      raison = "Avec la règle stricte, tous les votes doivent être identiques.";
    }
  }

  return (
    <>
      <h2>Tour {turn} : tous les joueurs ont voté</h2>
      <p>Règle appliquée : {regleAppliquee}</p>

      {!revealed && (
        <button onClick={() => setRevealed(true)}>Révéler les votes</button>
      )}

      {revealed && (
        <>
          <ul>
            {players.map((p, i) => (
              <li key={i}>{p} : {votes[i]}</li>
            ))}
          </ul>

          {tousCafe && <p>Pause café : tout le monde a joué la carte café.</p>}

          {result && result.statut >= 0 && (
            <>
              <p>Fonctionnalité validée : difficulté {result.statut}</p>
              <button onClick={() => onValidated(result.statut)}>
                Fonctionnalité suivante
              </button>
            </>
          )}

          {result && result.statut === -1 && (
            <>
              <p>Le tour doit être refait. {raison}</p>
              <button onClick={refaireLeVote}>Refaire le vote</button>
            </>
          )}
        </>
      )}
    </>
  );
}

export default Vote;