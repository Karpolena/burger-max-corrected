import React from "react";
import PropTypes from "prop-types";

const button = (props) => (
    <button 
        className={["Button", [props.btnType]].join(" ")}
        onClick={props.clicked}>
        {props.children}
    </button>
);

button.propTypes = {
    children: PropTypes.node,
    btnType: PropTypes.string,
    clicked: PropTypes.func
}

export default button;