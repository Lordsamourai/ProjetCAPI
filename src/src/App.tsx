import { useState } from "react";
import Session from "./core/Session";
import Loader from "./core/Loader";
import Vote from "./core/Vote";

function App() {
  const [players, setPlayers] = useState<string[]>([]);

  return (
    <>
      <Session onValidate={setPlayers} />
      <Loader />
      {players.length > 0 && <Vote key={players.join(",")} players={players} />}
    </>
  );
}

export default App;