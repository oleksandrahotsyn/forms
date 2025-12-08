import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [character, setCharacter] = useState(null);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    axios
      .get("http://swapi.info/api/people/5")
      .then(({ data }) => setCharacter(data));
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
