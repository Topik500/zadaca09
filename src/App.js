import './App.css';
import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ value: this.element.value });
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" ref={e => this.element = e} />
        </label> <br></br>
        <input type="submit" value="Pocetno stanje" />
      </form>
      <p>{ this.state.value }</p>
      </div>
    );
  }
}