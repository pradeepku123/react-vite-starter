import { useState } from "react";
function App() {
  let [counter, setCounter] = useState(0);
  let addCounter = () => {
    counter++;
    console.log(`counter: ${counter}`);
    setCounter(counter);
  };
  let deleteCounter = () => {
    counter--;
    console.log(`counter: ${counter}`);
    setCounter(counter);
  };
  return (
    <>
      <h1> Counter Value: {counter}</h1>
      <button onClick={addCounter}>Add</button>
      <button onClick={deleteCounter}>Delete</button>
    </>
  );
}

export default App;
