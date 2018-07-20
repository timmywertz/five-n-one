import React from "react";
import { map } from "ramda";
import { connect } from "react-redux";

const li = starwarsName => {
  return (
    <li key={starwarsName.id} style={{ name: starwarsName.name }}>
      {starwarsName.name}
    </li>
  );
};

const Starwars = props => {
  return (
    <div>
      <h1>Star Wars Names</h1>
      <ul>{map(li, props.starwarsNames)}</ul>
    </div>
  );
};

const mapStateToProps = state => {
  return { starwarsNames: state.starwarsNames };
};

const connector = connect(mapStateToProps);

export default connector(Starwars);
