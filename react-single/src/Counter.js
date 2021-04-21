import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

  }

  componentDidMount() {
    console.log('componentDidMount');
    // Best place to call APIs.

  }

  componentDidUpdate(nextProps, previousPros) {
    // compare props and update state/implement updation logic here
    
  }

  componentWillUnmount() {
    // clear state / clean data/apis

  }

  shouldComponentUpdate() {
    // return false - if you don't want to render current component.

  }

  handleDecrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  }

  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <>
        <h1>Name: {this.props.name} Date: {this.props.date}</h1>
        <h3>Counter: {this.state.counter}</h3>
        <button onClick={this.handleDecrement}>Decrement</button>
        <button onClick={this.handleIncrement}>Increment</button>
      </>
    );
  }
}

export default Counter;
