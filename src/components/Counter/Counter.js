import React, { Component } from 'react'
import "./Counter.css";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10
    }
  }

  render() {
    return (
      <div className="Counter-container">
        Counter
        <h2>{this.state.count}</h2>
      </div>
    )
  }
}
