import React from "react";
import PropTypes from "prop-types";

function CurrencyWidget(props) {
    const { BaseInput } = props.registry.widgets;
    return (
        <BaseInput
            className="ui labeled input"
            startAdornment={
                <label htmlFor={props.id} className="ui label">
                    $
                </label>
            }
            {...props}
        />
    );
}

if (process.env.NODE_ENV !== "production") {
    CurrencyWidget.propTypes = {
        value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        id: PropTypes.string,
    };
}

export default CurrencyWidget;
