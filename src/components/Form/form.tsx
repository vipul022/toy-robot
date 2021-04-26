import React, { useState } from "react";

const Form = () => {
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [direction, setDirection] = useState<string>("North");
  const [isValid, setIsValid] = useState<boolean>(false);
  const [maxX, setMaxX] = useState<number>(5);
  const [maxY, setMaxY] = useState<number>(5);
  const [errorMessage, setErrorMessage] = useState<string>("");
  interface FormState {
    x: number;
    y: number;
    direction: string;
  }

  const initialFormState: FormState = {
    x: 0,
    y: 0,
    direction: "north",
  };
  const [formState, setFormState] = useState<FormState>(initialFormState);

  const handleChange = (event: {
    target: { name: string; value: number | string };
  }) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };
  console.log("formState=>", formState);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const { x, y, direction } = formState;
    if (x < 0 || x > 5 || y < 0 || y > 5) {
      setErrorMessage(
        "Please enter valid coordinates (0 - 5), else your robot will fall down from the table"
      );
    } else {
      setErrorMessage("")
      setX(x);
      setY(y);
      setDirection(direction);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {errorMessage && <p>{errorMessage}</p>}
      <div>
        <label htmlFor="x">X-coordinates</label>
        <input type="number" name="x" id="x" onChange={handleChange}></input>
      </div>
      <div>
        <label htmlFor="y">Y-coordinates</label>
        <input type="number" name="y" id="y" onChange={handleChange}></input>
      </div>
      <div>
        <label htmlFor="north">North</label>
        <input
          type="radio"
          id="north"
          name="direction"
          value="north"
          onChange={handleChange}
        ></input>
        <label htmlFor="east">East</label>
        <input
          type="radio"
          id="east"
          name="direction"
          value="east"
          onChange={handleChange}
        ></input>
        <label htmlFor="south">South</label>
        <input
          type="radio"
          id="south"
          name="direction"
          value="south"
          onChange={handleChange}
        ></input>
        <label htmlFor="west">West</label>
        <input
          type="radio"
          id="west"
          name="direction"
          value="west"
          onChange={handleChange}
        ></input>
      </div>
      <input type="submit" value="Place"></input>
    </form>
  );
};

export default Form;
