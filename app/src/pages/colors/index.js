import React from "react";
import { map } from "ramda";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const li = color => {
  return (
    <li key={color.id} style={{ color: color.value }}>
      {color.name}
    </li>
  );
};

const Colors = props => {
  return (
    <div>
      <h1>Colors</h1>
      <Link to="/colors/new">Add New Color</Link>
      <ul>{map(li, props.colors)}</ul>
    </div>
  );
};

// }
// class Colors extends React.Component {
//   constructor() {
//     super();
//     this.state = { colors: [] };
//   }

//   render() {

const mapStateToProps = state => {
  return { colors: state.colors };
};

const connector = connect(mapStateToProps);

export default connector(Colors);
// export default Colors;
