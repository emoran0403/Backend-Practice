import * as React from "react";
import { useState, useEffect } from "react";
import * as Types from "../../Types";
import DogFacts from "./DogFacts";

const App = (props: Types.NO_PROPS) => {
  return (
    <main className="container my-5">
      <h1 className="text-primary text-center">Hello!</h1>
      <hr></hr>
      <DogFacts />
    </main>
  );
};

export default App;
