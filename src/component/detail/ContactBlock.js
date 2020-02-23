import React from "react";
import PropTypes from 'prop-types';
import LinkLabel from "./LinkLabel";

const ContactBlock = (props) => {
    return (
        <div>
            <h3 className="item-title">聯絡資訊</h3>
            <ul className="detail-list">
                {
                    (props.officialSite || props.facebook) ? (
                        <li>相關連結：
                            {(props.officialSite && props.officialSite !== '') ? (<LinkLabel link={props.officialSite} text={'官方網站'}/>) : ''}
                            {(props.facebook && props.facebook !== '') ? (<LinkLabel link={props.facebook} text={'Facebook 粉絲專頁'}/>) : ''}
                        </li>
                    ) : ''
                }
                {(props.tel && props.tel !== '') ? (<li>連絡電話：{props.tel}</li>) : ''}
                {(props.email && props.email !== '') ? (<li>電子信箱：{props.email}</li>) : ''}
                {(props.fax && props.fax !== '') ? (<li>傳真：{props.fax}</li>) : ''}
            </ul>
        </div>
    );
};

ContactBlock.propTypes = {
    officialSite: PropTypes.string,
    facebook: PropTypes.string,
    tel: PropTypes.string,
    email: PropTypes.string,
    fax: PropTypes.string,
};

export default ContactBlock;
