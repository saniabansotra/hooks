import React, { useState } from "react";
import "./App.css";

const App = () => {
  const state = useState();
  console.log(state);
  const [count, setCount] = useState(0);

  const IncNum = () => {
    setCount(count + 1);
    // count++;
    // console.log("clicked");
  };
  return (
    <>
      <h1> {count}</h1>
      <button onClick={IncNum}>Click me</button>
    </>
  );
};
export default App;
