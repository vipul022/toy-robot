import React from "react";
import Form from "../Form/form";
import Button from "../Button/button";

const App = () => {
  return (
    <>
      <header>
        <h1>Toy Robot</h1>
      </header>
      <h4>Place your robot on the table</h4>
      <Form />

      <button type="button">Move</button>
      <button type="button">Left</button>
      <button type="button">Right</button>
      <button type="button">Report</button>
    </>
  );
};

export default App;
