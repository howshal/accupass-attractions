import React, {useEffect} from "react";
import {Link, Redirect, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {fetchAttractionData} from "../action/actionCreators";
import {attractionDetailSelector} from "../reducer/attractionsReducer";
import ScrollToTop from "./ScrollToTop";
import LoadingBlock from "./common/LoadingBlock";
import DetailContainer from "./detail/DetailContainer";
import '../style/AttractionDetail.css';

const AttractionDetail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const detail = useSelector(state => attractionDetailSelector(state, parseInt(id)));

    useEffect(() => {
        if (detail === null) {
            dispatch(fetchAttractionData());
        }
    }, [detail, dispatch]);

    return (
        <div className="attraction-detail">
            <ScrollToTop />
            {(detail === null) ? (
                <div>
                    <h1 className="main-title">景點介紹</h1>
                    <LoadingBlock isDark={true} />
                </div>
            ) : (detail) ? (
                <div>
                    <h1 className="main-title">{detail.name}</h1>
                    <DetailContainer data={detail}/>
                </div>

            ) : (<Redirect to={'/'}/>)}
            <Link to="/" className="link-stream">回景點列表</Link>
        </div>
    );
};

export default AttractionDetail;