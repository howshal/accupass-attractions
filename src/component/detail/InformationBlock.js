import React from "react";
import PropTypes from 'prop-types';

import LocationMap from "./LocationMap";
import {nl2br} from "../../utility/TextFormatter";

const InformationBlock = (props) => {
    return (
        <div>
            <h3 className="item-title">旅遊資訊</h3>
            <ul className="detail-list">
                <li>
                    <h4>地址</h4>
                    <p>{props.address}</p>
                    <LocationMap lat={props.latitude} lng={props.longitude}/>
                </li>
                {(props.openTime && props.openTime !== '') ? (
                    <li>
                        <h4>開放資訊</h4>
                        <p dangerouslySetInnerHTML={{__html: nl2br(props.openTime)}}/>
                    </li>) : ''}
                {(props.ticket && props.ticket !== '') ? (
                    <li>
                        <h4>門票資訊</h4>
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
