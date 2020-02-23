import React from "react";
import PropTypes from 'prop-types';

import PhotoSlide from "./PhotoSlide";
import InformationBlock from "./InformationBlock";
import ContactBlock from "./ContactBlock";
import IntroductionBlock from "./IntroductionBlock";

const DetailContainer = ({data}) => {
    return (
        <div className="detail-container">
            {(data.images.length > 0) ? (
                <PhotoSlide images={data.images}/>
            ) : ''}
            <IntroductionBlock
                introduction={data.introduction}
                remind={data.remind} />
            <InformationBlock
                address={data.address}
                latitude={data.nlat}
                longitude={data.elong}
                openTime={data.open_time}
                ticket={data.ticket} />
            <ContactBlock
                officialSite={data.official_site}
                email={data.email}
                tel={data.tel}
                fax={data.fax}
                facebook={data.facebook} />
        </div>
    );
};

DetailContainer.propTypes = {
    data: PropTypes.object.isRequired,
};

export default DetailContainer;