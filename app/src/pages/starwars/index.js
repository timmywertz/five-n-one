import React from "react";
import fetch from "isomorphic-fetch";
import { map } from "ramda";

const li = name => {
  return (
    <li key={name.id} style={{ name: name.name }}>
      {name.name}
    </li>
  );
};

class Names extends React.Component {
  constructor() {
    super();
    this.state = { names: [] };
  }
  componentDidMount() {
    fetch("http://localhost:5000/starwars")
      .then(res => res.json())
      .then(names => this.setState({ names }));
  }

  render() {
    return (
      <div>
        <h1>Star Wars Names</h1>
        <ul>{map(li, this.state.names)}</ul>
      </div>
    );
  }
}

export default Names;
