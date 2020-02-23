import React from 'react'
import PropTypes from 'prop-types';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

const LocationMap = (props) => {
    const position = [props.lat, props.lng];

    return (
        <Map center={position} zoom={18} style={{height: '150px'}}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </Map>
    );
};

LocationMap.propTypes = {
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
};

export default LocationMap;