import React from 'react';
import PropTypes from 'prop-types';
import '../../style/LoadingCircle.css';

const LoadingCircle = (props) => {
    let className = (props.isDark) ? 'lds-eclipse-dark' : 'lds-eclipse';

    return (
        <div className={className} style={{width: props.size + 'px', height: props.size + 'px'}}>
            <div />
        </div>
    );
};

LoadingCircle.propTypes = {
    isDark: PropTypes.bool.isRequired,
    size: PropTypes.number.isRequired,
};

export default LoadingCircle;
