import React from "react";
import PropTypes from "prop-types";



const navigationItem = (props) => (    
        <li className="NavigationItem">
            <a 
                href={props.link}
                className={props.active ? "active" : null}>
                {props.children}
            </a>
        </li>   
);

navigationItem.propTypes = {
    link: PropTypes.string,
    children: PropTypes.node,
    active: PropTypes.bool
}

export default navigationItem;