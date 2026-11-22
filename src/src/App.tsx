import { useState } from "react";
import Session from "./core/Session";
import LoaderUI from "./ui/LoaderUI";
import Vote from "./core/Vote";
import backlog from "../../exemples/backlog.json";

function App() {
  const [players, setPlayers] = useState<string[]>([]);
  const [rule, setRule] = useState("stricte");
  const [index, setIndex] = useState(0); // numéro de la fonctionnalité en cours
  const [estimations, setEstimations] = useState<number[]>([]);

  const fonctionnalites = backlog.fonctionnalites;
  const termine = index >= fonctionnalites.length;
  const courante = fonctionnalites[index];

  const validerFonctionnalite = (difficulte: number) => {
    setEstimations([...estimations, difficulte]);
    setIndex(index + 1);
  };

  return (
    <>
      <Session onValidate={setPlayers} />
      <label>
        Règle de validation{" "}
        <select value={rule} onChange={(e) => setRule(e.target.value)}>
          <option value="stricte">Stricte (unanimité)</option>
          <option value="mediane">Médiane</option>
        </select>
      </label>

      {termine ? (
        <>
          <h2>Backlog terminé</h2>
          <ul>
            {fonctionnalites.map((f, i) => (
              <li key={f.id}>{f.id} : {f.titre} : difficulté {estimations[i]}</li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <LoaderUI id={courante.id} titre={courante.titre} />
          {players.length > 0 && (
            <Vote
              key={players.join(",") + rule + index}
              players={players}
              rule={rule}
              onValidated={validerFonctionnalite}
            />
          )}
        </>
      )}
    </>
  );
}

export default App;