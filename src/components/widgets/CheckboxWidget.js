import React from "react";
import PropTypes from "prop-types";
// import DescriptionField from "../fields/DescriptionField.js";

function CheckboxWidget(props) {
    const {
        schema,
        id,
        value,
        required,
        disabled,
        readonly,
        label,
        autofocus,
        onChange,
    } = props;

    const viewonly = disabled || readonly;
    // const description = {
    //     dataTooltip: schema.description,
    //     dataPosition: 'top center'
    // }
    return (
        <div
            className={`ui checkbox ${viewonly ? "disabled" : ""}`}
            data-tooltip={schema.description}
            data-position="top left">
            {/* {schema.description && (
                <DescriptionField description={schema.description} />
            )} */}
            <input
                type="checkbox"
                id={id}
                checked={typeof value === "undefined" ? false : value}
                required={required}
                disabled={viewonly}
                autoFocus={autofocus}
                onChange={event => onChange(event.target.checked)}
            />
            <label>{label}</label>
        </div>
    );
}

CheckboxWidget.defaultProps = {
    autofocus: false,
};

if (process.env.NODE_ENV !== "production") {
    CheckboxWidget.propTypes = {
        schema: PropTypes.object.isRequired,
        id: PropTypes.string.isRequired,
        value: PropTypes.bool,
        required: PropTypes.bool,
        disabled: PropTypes.bool,
        readonly: PropTypes.bool,
        autofocus: PropTypes.bool,
        onChange: PropTypes.func,
    };
}

export default CheckboxWidget;
