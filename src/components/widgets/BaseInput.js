import React from "react";
import PropTypes from "prop-types";

function BaseInput(props) {
    // Note: since React 15.2.0 we can't forward unknown element attributes, so we
    // exclude the "options" and "schema" ones here.
    if (!props.id) {
        console.log("No id for", props);
        throw new Error(`no id for props ${JSON.stringify(props)}`);
    }
    const {
        className,
        children,
        value,
        readonly,
        disabled,
        autofocus,
        onBlur,
        onFocus,
        options,
        schema,
        formContext,
        registry,
        rawErrors,
        startAdornment,
        ...inputProps
    } = props;

    inputProps.type = options.inputType || inputProps.type || "text";
    const _onChange = ({ target: { value } }) => {
        return props.onChange(value === "" ? options.emptyValue : value);
    };
    return (
        <div className={className || "ui input"}>
            {startAdornment}
            <input
                className="form-control"
                readOnly={readonly}
                disabled={disabled}
                autoFocus={autofocus}
                value={value == null ? "" : value}
                {...inputProps}
                onChange={_onChange}
                onBlur={
                    onBlur &&
                    (event => onBlur(inputProps.id, event.target.value))
                }
                onFocus={
                    onFocus &&
                    (event => onFocus(inputProps.id, event.target.value))
                }
            />
            {children}
        </div>
    );
}

BaseInput.defaultProps = {
    type: "text",
    required: false,
    disabled: false,
    readonly: false,
    autofocus: false,
};

BaseInput.propTypes = {
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.any,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    autofocus: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    startAdornment: PropTypes.object,
};

export default BaseInput;
