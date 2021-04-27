import React from "react";
import { Form } from "../Form/form";
import { Header } from "../Header/header";

export const App = () => {
  return (
    <>
      <Header />
      {/* <header>
        <h1>Toy Robot</h1>
        <h4>Place your robot on the table</h4>
      </header> */}
      <Form />
    </>
  );
};
