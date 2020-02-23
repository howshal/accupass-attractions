import React from "react";
import PropTypes from 'prop-types';

const LinkLabel = (props) => {
    return (
        <a href={props.link} className="link-label">{props.text}</a>
    )
};

LinkLabel.propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default LinkLabel;
