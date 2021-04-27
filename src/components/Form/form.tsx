import React, { useState } from "react";
import { Button } from "../Button/button";

export const Form = () => {
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [direction, setDirection] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [report, setReport] = useState<string>("");
  const [hideMessage, setHideMessage] = useState<boolean>(true);

  const PLACE_ROBOT_ERROR_MESSAGE =
    "Please place your robot safely on the table first";
  const INVALID_COORDINATES_ERROR_MESSAGE =
    "Please enter valid coordinates (0 - 5) to place your robot safely on table";
  const WARNING_ERROR_MESSAGE =
    "Sorry! you can't move further otherwise your robot will fall down from the table";
  const ENTER_DIRECTION_ERROR_MESSAGE =
    "Please select the direction in which you want the robot to face";

  interface FormState {
    x: number;
    y: number;
    direction: string;
  }

  const initialFormState: FormState = {
    x: 0,
    y: 0,
    direction: "",
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
    } else if (direction === "") {
      setErrorMessage(ENTER_DIRECTION_ERROR_MESSAGE);
    } else {
      setErrorMessage("");
      setReport("");
      setX(x);
      setY(y);
      setDirection(direction);
      setIsValid(true);
      setHideMessage(true);
    }
  };

  const handleMove = (): void => {
    if (!isValid) {
      setErrorMessage(PLACE_ROBOT_ERROR_MESSAGE);
    } else {
      switch (direction) {
        case "north":
          y < 5 ? setY(Number(y) + 1) : setErrorMessage(WARNING_ERROR_MESSAGE);

          break;
        case "east":
          x < 5 ? setX(Number(x) + 1) : setErrorMessage(WARNING_ERROR_MESSAGE);

          break;
        case "south":
          y > 0 ? setY(Number(y) - 1) : setErrorMessage(WARNING_ERROR_MESSAGE);

          break;
        case "west":
          x > 0 ? setX(Number(x) - 1) : setErrorMessage(WARNING_ERROR_MESSAGE);
      }
      setReport("");
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
      setReport("");
      setHideMessage(true);
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
      setReport("");
      setHideMessage(true);
    }
  };
  const handleReport = () => {
    if (!isValid) {
      setErrorMessage(PLACE_ROBOT_ERROR_MESSAGE);
    } else {
      setReport(
        `The current position of your robot is ${Number(x)}, ${Number(y)}, ${direction}`
      );
      setErrorMessage("");
      setHideMessage(false);
    }
  };
  console.log("type of x=> ", typeof x);
  console.log("report=>", x, y, direction);

  return (
    <>
      <form onSubmit={handleSubmit}>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
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

      {report && <p style={{ color: "green" }}>{report}</p>}

      {!errorMessage && hideMessage && direction !== "" ? (
        <p style={{ color: "green" }}>
          Your robot has been successfully placed on table at {Number(x)},{" "}
          {Number(y)} facing towards {direction}
        </p>
      ) : (
        ""
      )}
    </>
  );
};
