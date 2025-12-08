import { useState, useEffect } from "react";
import axios from "axios";

import type { Character } from "./types/character";

function App() {
  const [character, setCharacter] = useState<Character | null>(null);
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    async function getCharacter() {
      const { data } = await axios.get<Character>(
        "http://swapi.info/api/people/5"
      );
      setCharacter(data);
    }
    getCharacter();
  }, []);

  useEffect(() => {
    console.log("Counter:", counter);
  }, []);

  return (
    <>
      <h1>Effect</h1>
      <pre>{JSON.stringify(character, null, 2)}</pre>
      <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
        Count {counter}
      </button>
    </>
  );
}

export default App;
