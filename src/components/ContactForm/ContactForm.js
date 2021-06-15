import React, { Component } from "react";

export default class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "Tatyana",
      lastName: "Alexander",
      email: "tatyana.theresa@gmail.com",
      message: "message",
    };
  }

  render() {
    return (
      <div>
        <h1>Tatyana's Contact Form</h1>
        <form>
          <ul>
            <li>
              <label htmlFor="firstName">First Name:</label>
              <input type="text" id="firstName" name="firstName" />
            </li>
            <li>
              <label htmlFor="lastName">Last Name:</label>
              <input type="text" id="lastName" name="lastName" />
            </li>
            <li>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
            </li>
            <li>
              <label htmlFor="message">Message:</label>
              <input type="text" id="message" name="message" />
            </li>
            <button>Send contact form</button>
          </ul>
        </form>
      </div>
    );
  }
}
