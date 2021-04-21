import React, { Component } from "react";

import Counter from "./Counter";
import CounterFn from "./CounterFn";

const userDetails = {
  name: "John",
  age: 23
}

class App extends Component {
  render() {
    return (
      <>
        <h1>React App</h1>
        <p>This is my first react component.</p>
        <h2>Counter Class based Component</h2>
        <Counter name="Counter" date="04/20/2021" userDetails={userDetails} />
        <h2>Counter Fn Component</h2>
        <CounterFn name="Counter Component" date="04/20/2021" />
      </>
    );
  }
}

export default App;
