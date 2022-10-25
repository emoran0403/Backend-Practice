import * as React from "react";
import { useState, useEffect } from "react";
import * as Types from "../../Types";

const DogFacts = (props: Types.NO_PROPS) => {
  return (
    <main className="container my-5">
      <h1 className="text-primary text-center">This is Dog Facts</h1>
      <div>Some dog facts will go here</div>
    </main>
  );
};

export default DogFacts;
