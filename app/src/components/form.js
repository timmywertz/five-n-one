import React from "react";
import { Link } from "react-router-dom";

const Form = ({
  id = "",
  name = "",
  value = "",
  onChange,
  onSubmit,
  cancelUrl,
  isColor
}) => {
  return (
    <form onSubmit={e => onSubmit(e)}>
      {/* <div>
        <label className="dib">value</label>
        <div>{id}</div>
      </div> */}
      <div>
        <label className="dib">name</label>
        <input
          type="text"
          value={name}
          onChange={e => onChange("name", e.target.value)}
        />
      </div>
      <React.Fragment>
        {isColor ? (
          <div>
            <label className="dib">value</label>
            <input
              type="text"
              value={value}
              onChange={e => onChange("value", e.target.value)}
            />
          </div>
        ) : null}
      </React.Fragment>
      <div>
        <button type="submit">Submit</button>
      </div>
      <Link to={cancelUrl}>Cancel</Link>
    </form>
  );
};

export default Form;
