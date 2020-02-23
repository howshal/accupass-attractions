import React from "react";
import PropTypes from 'prop-types';
import PhotoSlide from "./PhotoSlide";
import LocationMap from "./LocationMap";
import {nl2br} from "../../utility/TextFormatter";
import LinkLabel from "./LinkLabel";
import InformationBlock from "./InformationBlock";
import ContactBlock from "./ContactBlock";

const DetailBlock = ({data}) => {


    return (
        <div>
            {(data.images.length > 0) ? (
                <PhotoSlide images={data.images}/>
            ) : ''}
            <div className="detail-introduction">
                <p dangerouslySetInnerHTML={{__html: nl2br(data.introduction)}}/>
                {(data.remind !== '') ? (<p>{data.remind}</p>) : ''}
            </div>
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

DetailBlock.propTypes = {
    data: PropTypes.object.isRequired,
};

export default DetailBlock;