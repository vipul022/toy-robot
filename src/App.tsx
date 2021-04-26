import React from "react";

const App = () => {
  return (
    <>
      <header>
        <h1>Toy Robot</h1>
      </header>
      <h4>Place your robot on the table</h4>
      <form>
        <div>
          <label htmlFor="x-coordinates">X-coordinates</label>
          <input type="number" name="x-coordinates" id="x- coordinates"></input>
        </div>
        <div>
          <label htmlFor="y-coordinates">Y-coordinates</label>
          <input type="number" name="y-coordinates" id="y- coordinates"></input>
        </div>
        <div>
          <label htmlFor="north">North</label>
          <input type="radio" id="north" name="direction" value="north"></input>
          <label htmlFor="east">East</label>
          <input type="radio" id="east" name="direction" value="east"></input>
          <label htmlFor="south">South</label>
          <input type="radio" id="south" name="direction" value="south"></input>
          <label htmlFor="west">West</label>
          <input type="radio" id="west" name="direction" value="west"></input>
        </div>
        <input type="submit" value="Place"></input>
      </form>
    </>
  );
};

export default App;
