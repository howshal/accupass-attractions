import React from 'react'
import PropTypes from 'prop-types';
import {Map, Marker, TileLayer} from 'react-leaflet'

const LocationMap = (props) => {
    const position = [props.lat, props.lng];

    return (
        <Map center={position} zoom={18} className="location-map" maxZoom={19}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} />
        </Map>
    );
};

LocationMap.propTypes = {
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
};

export default LocationMap;