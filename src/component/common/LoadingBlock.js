import React from 'react';
import PropTypes from 'prop-types';
import LoadingCircle from './LoadingCircle';

const LoadingBlock = (props) => {
    return (
        <div style={{padding: '3em 0 3em 0', textAlign: 'center'}}>
            <LoadingCircle isDark={props.isDark} size={25} />
        </div>
    );
};

LoadingBlock.propTypes = {
    isDark: PropTypes.bool.isRequired,
};

export default LoadingBlock;
