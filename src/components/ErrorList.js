import React from "react";

export default function ErrorList(props) {
  const { errors } = props;
  return (
    <div className="ui negative message panel panel-danger errors">
      <i className="close icon" />
      <div className="panel-heading">
        <h3 className="header panel-title">Errors</h3>
      </div>
      <ul className="list list-group">
        {errors.map((error, i) => {
          return (
            <li key={i} className="list-group-item text-danger">
              {error.stack}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
