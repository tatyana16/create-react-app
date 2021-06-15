import React, { Component } from "react";
import "./Counter.css";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "Tatyana",
    };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement = () => {
    console.log("hello world");
    if (this.state.count < 20) {
      // update the count variable
      this.setState((currentState) => {
        console.log(currentState);
        const { count } = currentState;
        return {
          count: count + 1,
        };
      });
    }
  };

  handleDecrement = () => {
    console.log("hello world");
    // update the count variable
    this.setState((currentState) => {
      console.log(currentState);
      const { count } = currentState;
      return {
        count: count - 1,
      };
    });
  };

  handleReset = () => {
    this.setState((currentState) => {
      console.log(currentState);
      const { count } = currentState;
      return {
        count: 0,
      };
    });
  };

  render() {
    const counterClass =
      this.state.count > 10
        ? "Counter-active"
        : this.state.count < 5
        ? "Counter-low"
        : "";

    const ResetBtnClass = this.state.count === 0 ? "ResetBtnClass" : "";

    return (
      <div className="Counter-container">
        <h1>{this.state.name}'s Counter App</h1>
        <h2 className={counterClass}>{this.state.count}</h2>
        <button onClick={this.handleIncrement}>increment (+)</button>
        <button onClick={this.handleDecrement}>decrement (-)</button>
        <button onClick={this.handleReset} className={ResetBtnClass}>
          Reset
        </button>
      </div>
    );
  }
}
