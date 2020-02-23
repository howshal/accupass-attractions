import React from "react";
import PropTypes from 'prop-types';

import LocationMap from "./LocationMap";
import {nl2br} from "../../utility/TextFormatter";

const InformationBlock = (props) => {
    return (
        <div>
            <h3>旅遊資訊</h3>
            <ul className="detail-information">
                <li>地址：{props.address}</li>
                <li><LocationMap lat={props.latitude} lng={props.longitude}/></li>
                {(props.openTime !== '') ? (<li><p dangerouslySetInnerHTML={{__html: nl2br(props.openTime)}}/></li>) : ''}
                {(props.ticket !== '') ? (
                    <li>
                        <h4>售票資訊</h4>
                        <p dangerouslySetInnerHTML={{__html: nl2br(props.ticket)}}/>
                    </li>) : ''}
            </ul>
        </div>
    );
};

InformationBlock.propTypes = {
    address: PropTypes.string.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    openTime: PropTypes.string,
    ticket: PropTypes.string,
};

export default InformationBlock;
