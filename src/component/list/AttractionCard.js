import React from 'react';
import PropTypes from 'prop-types';

const AttractionCard = (props) => {
    return (
        <div className="attraction-card">
            <div className="attraction-card__cover">
                {(props.image) ?
                    (<img src={props.image.src} alt={props.image.sub} />) :
                    (<img src="/image_placeholder.png" alt="沒有景點相片" />)}
            </div>
            <div className="attraction-card__intro">
                <h3 className="item-title">{props.name}</h3>
                <p>{props.address}</p>
            </div>
        </div>
    );
};

AttractionCard.propTypes = {
    image: PropTypes.object,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired
};

export default AttractionCard;
