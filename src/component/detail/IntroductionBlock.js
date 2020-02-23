import React from 'react';
import PropTypes from 'prop-types';
import {nl2br} from "../../utility/TextFormatter";

const IntroductionBlock = (props) => {
    return (
        <div className="detail-introduction">
            <p dangerouslySetInnerHTML={{__html: nl2br(props.introduction)}}/>
            {(props.remind && props.remind !== '') ? (<p>{props.remind}</p>) : ''}
        </div>
    )
};

IntroductionBlock.propTypes = {
    introduction: PropTypes.string.isRequired,
    remind: PropTypes.string,
};

export default IntroductionBlock;
