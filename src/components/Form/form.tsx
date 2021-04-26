import React, { useState } from "react";
import { Button } from "../Button/button";

export const Form = () => {
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [direction, setDirection] = useState<string>("North");
  const [isValid, setIsValid] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const PLACE_ROBOT_ERROR_MESSAGE =
    "Please place your robot safely on the table first";
  const INVALID_COORDINATES_ERROR_MESSAGE =
    "Please enter valid coordinates (0 - 5) to place your robot safely on table";
  const WARNING_ERROR_MESSAGE =
    "Sorry! you can't move further otherwise your robot will fall down from the table";
  console.log("errorMessage=>  ", errorMessage);
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

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const { x, y, direction } = formState;
    if (x < 0 || x > 5 || y < 0 || y > 5) {
      setErrorMessage(INVALID_COORDINATES_ERROR_MESSAGE);
    } else {
      setErrorMessage("");
      setX(x);
      setY(y);
      setDirection(direction);
      setIsValid(true);
    }
  };

  const handleMove = (): void => {
    if (!isValid) {
      setErrorMessage(PLACE_ROBOT_ERROR_MESSAGE);
    } else {
      console.log("direction=->", direction);
      switch (direction) {
        case "north":
          console.log("y=>", typeof y);
          y < 5 ? setY(Number(y) + 1) : setErrorMessage(WARNING_ERROR_MESSAGE);
          break;
        case "east":
          x < 5 ? setX(Number(x) + 1) : setErrorMessage(WARNING_ERROR_MESSAGE);
          break;
        case "south":
          y > 0 ? setY(Number(y) - 1) : setErrorMessage(WARNING_ERROR_MESSAGE);
          console.log("y=> ", y);
          break;
        case "west":
          x > 0 ? setX(Number(x) - 1) : setErrorMessage(WARNING_ERROR_MESSAGE);
      }
    }
  };
  const handleLeft = () => {
    if (!isValid) {
      setErrorMessage(PLACE_ROBOT_ERROR_MESSAGE);
    } else {
      switch (direction) {
        case "north":
          setDirection("west");
          break;
        case "east":
          setDirection("north");
          break;
        case "south":
          setDirection("east");
          break;
        case "west":
          setDirection("south");
      }
      setErrorMessage("");
    }
  };
  const handleRight = () => {
    if (!isValid) {
      setErrorMessage(PLACE_ROBOT_ERROR_MESSAGE);
    } else {
      switch (direction) {
        case "north":
          setDirection("east");
          break;
        case "east":
          setDirection("south");
          break;
        case "south":
          setDirection("west");
          break;
        case "west":
          setDirection("north");
      }
      setErrorMessage("");
    }
  };
  const handleReport = () => {
    if (!isValid) {
      setErrorMessage(PLACE_ROBOT_ERROR_MESSAGE);
    } else {
      setErrorMessage("");
    }
  };
  console.log("report=>", x, y, direction);
  return (
    <>
      <form onSubmit={handleSubmit}>
        {errorMessage && <p>{errorMessage}</p>}
        <div>
          <label htmlFor="x">X-coordinates</label>
          <input
            type="number"
            name="x"
            id="x"
            value={formState.x}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="y">Y-coordinates</label>
          <input
            type="number"
            name="y"
            id="y"
            value={formState.y}
            onChange={handleChange}
          ></input>
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
      <Button clicked={handleMove}>Move</Button>

      <Button clicked={handleLeft}>Left</Button>

      <Button clicked={handleRight}>Right</Button>

      <Button clicked={handleReport}>Report</Button>
    </>
  );
};
