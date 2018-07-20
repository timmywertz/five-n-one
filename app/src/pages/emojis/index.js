import React from "react";
import { connect } from "react-redux";
import { map } from "ramda";

const li = emoji => {
  return (
    <li key={emoji.id} style={{ name: emoji.value }}>
      {emoji.value}
    </li>
  );
};

const Emojis = props => {
  return (
    <div>
      <h1>Emojis</h1>
      <ul>{map(li, props.emojis)}</ul>
    </div>
  );
};

const mapStateToProps = state => {
  return { emojis: state.emojis };
};

const connector = connect(mapStateToProps);

export default connector(Emojis);
