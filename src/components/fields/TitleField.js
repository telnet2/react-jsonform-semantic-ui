import React from "react";
import PropTypes from "prop-types";

const REQUIRED_FIELD_SYMBOL = "*";

function AddButton(props) {
  if (props.canAdd) {
    return (
      <span className="add-button" onClick={props.onClick}>
        +
      </span>
    );
  }
  return null;
}
function TitleField(props) {
  const { id, title, required, canAdd, onAddClick } = props;

  const legend = required ? title + REQUIRED_FIELD_SYMBOL : title;
  return (
    <div className="ui dividing header">
      <h3 id={id} style={{ marginBottom: "0px", display: "inline-block" }}>
        {legend}
      </h3>
      <AddButton canAdd={canAdd} onClick={onAddClick} />
    </div>
  );
}

if (process.env.NODE_ENV !== "production") {
  TitleField.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    required: PropTypes.bool,
  };
}

export default TitleField;
