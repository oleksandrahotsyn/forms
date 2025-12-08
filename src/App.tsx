import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [character, setCharacter] = useState(null);
  useEffect(() => {
    axios
      .get("http://swapi.info/api/people/5")
      .then(({ data }) => setCharacter(data));
  }, []);

  return (
    <>
      <h1>Effect</h1>
      <pre>{JSON.stringify(character, null, 2)}</pre>
    </>
  );
}

export default App;
