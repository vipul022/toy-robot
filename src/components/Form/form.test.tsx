import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Form } from "./form";

describe("Form component renders as expected", () => {
  beforeEach(() => {
    render(<Form />);
  });
  test("should render label X-coordinates on screen", () => {
    screen.getByText(/X-coordinates/i).toBeInTheDocument;
  });
  test("should render label Y-coordinates on screen", () => {
    screen.getByText(/Y-coordinates/i).toBeInTheDocument;
  });
  test("should render both the input boxes", () => {
    const input = screen.getAllByRole("spinbutton");

    expect(input.length).toEqual(2);
  });
  test("should render all radio buttons", () => {
    const input = screen.getAllByRole("radio");
    expect(input.length).toEqual(4);
  });
  test("should render all buttons on screen", () => {
    const input = screen.getAllByRole("button");
    expect(input.length).toEqual(5);
  });
});

describe("Form component display data as expected", () => {
  beforeEach(() => {
    render(<Form />);
  });

  // positive test cases
  test("should render the success message on placing the robot successfully on table", () => {
    // fill the form
    userEvent.type(
      screen.getByRole("spinbutton", { name: /x\-coordinates/i }),
      "1"
    );
    userEvent.type(
      screen.getByRole("spinbutton", { name: /y\-coordinates/i }),
      "0"
    );
    userEvent.type(screen.getByRole("radio", { name: /north/i }), "north");
    const placeButton = screen.getByRole("button", { name: /place/i });
    userEvent.click(placeButton);
    expect(
      screen.getByText(
        /your robot has been successfully placed on table at 1, 0 facing towards north/i
      )
    ).toBeInTheDocument;
  });
  test("should generate correct report on giving valid commands", () => {
    userEvent.type(
      screen.getByRole("spinbutton", { name: /x\-coordinates/i }),
      "0"
    );
    userEvent.type(
      screen.getByRole("spinbutton", { name: /y\-coordinates/i }),
      "0"
    );
    userEvent.type(screen.getByRole("radio", { name: /north/i }), "north");
    const placeButton = screen.getByRole("button", { name: /place/i });
    userEvent.click(placeButton);

    const moveButton = screen.getByRole("button", { name: /move/i });
    userEvent.click(moveButton);

    const reportButton = screen.getByRole("button", { name: /report/i });
    userEvent.click(reportButton);

    expect(
      screen.getByText(/the current position of your robot is 0, 1, north/i)
    ).toBeInTheDocument;
  });
  test("should generate correct report on giving valid commands", () => {
    userEvent.type(
      screen.getByRole("spinbutton", { name: /x\-coordinates/i }),
      "0"
    );
    userEvent.type(
      screen.getByRole("spinbutton", { name: /y\-coordinates/i }),
      "0"
    );
    userEvent.type(screen.getByRole("radio", { name: /north/i }), "north");

    const placeButton = screen.getByRole("button", { name: /place/i });
    userEvent.click(placeButton);

    const leftButton = screen.getByRole("button", { name: /left/i });
    userEvent.click(leftButton);

    const reportButton = screen.getByRole("button", { name: /report/i });
    userEvent.click(reportButton);

    expect(
      screen.getByText(/the current position of your robot is 0, 0, west/i)
    ).toBeInTheDocument;
  });

  test("should generate correct report on giving valid commands", () => {
    userEvent.type(
      screen.getByRole("spinbutton", { name: /x\-coordinates/i }),
      "1"
    );
    userEvent.type(
      screen.getByRole("spinbutton", { name: /y\-coordinates/i }),
      "2"
    );
    userEvent.type(screen.getByRole("radio", { name: /east/i }), "east");

    const placeButton = screen.getByRole("button", { name: /place/i });
    userEvent.click(placeButton);

    const moveButton = screen.getByRole("button", { name: /move/i });
    userEvent.click(moveButton);
    userEvent.click(moveButton);

    const leftButton = screen.getByRole("button", { name: /left/i });
    userEvent.click(leftButton);

    userEvent.click(moveButton);

    const reportButton = screen.getByRole("button", { name: /report/i });
    userEvent.click(reportButton);

    expect(
      screen.getByText(/the current position of your robot is 3, 3, north/i)
    ).toBeInTheDocument;
  });

  // Negative test cases

  test("should render an error message if any other command is selected before successfully executing the place command", () => {
    userEvent.type(
      screen.getByRole("spinbutton", { name: /x\-coordinates/i }),
      "1"
    );
    userEvent.type(
      screen.getByRole("spinbutton", { name: /y\-coordinates/i }),
      "1"
    );
    userEvent.type(screen.getByRole("radio", { name: /west/i }), "west");
    const moveButton = screen.getByRole("button", { name: /move/i });
    userEvent.click(moveButton);

    expect(
      screen.getByText(/please place your robot safely on the table first/i)
    ).toBeInTheDocument;
  });

  test("should render an error message if direction is not selected", () => {
    userEvent.type(
      screen.getByRole("spinbutton", { name: /x\-coordinates/i }),
      "1"
    );
    userEvent.type(
      screen.getByRole("spinbutton", { name: /y\-coordinates/i }),
      "1"
    );
    const placeButton = screen.getByRole("button", { name: /place/i });
    userEvent.click(placeButton);

    expect(
      screen.getByText(
        /please select the direction in which you want the robot to face/i
      )
    ).toBeInTheDocument;
  });

  test("should render an error message if invalid coordinates are selected", () => {
    userEvent.type(
      screen.getByRole("spinbutton", { name: /x\-coordinates/i }),
      "6"
    );
    userEvent.type(
      screen.getByRole("spinbutton", { name: /y\-coordinates/i }),
      "4"
    );
    userEvent.type(screen.getByRole("radio", { name: /west/i }), "west");
    const placeButton = screen.getByRole("button", { name: /place/i });
    userEvent.click(placeButton);

    expect(
      screen.getByText(
        /please enter valid coordinates \(0 \- 5\) to place your robot safely on table/i
      )
    ).toBeInTheDocument;
  });

  test("should render an error message if an invalid move is selected", () => {
    userEvent.type(
      screen.getByRole("spinbutton", { name: /x\-coordinates/i }),
      "5"
    );
    userEvent.type(
      screen.getByRole("spinbutton", { name: /y\-coordinates/i }),
      "4"
    );
    userEvent.type(screen.getByRole("radio", { name: /east/i }), "east");
    const placeButton = screen.getByRole("button", { name: /place/i });
    userEvent.click(placeButton);

    const moveButton = screen.getByRole("button", { name: /move/i });
    userEvent.click(moveButton);

    expect(
      screen.getByText(
        /sorry! you can't move further otherwise your robot will fall down from the table/i
      )
    ).toBeInTheDocument;
  });
});
