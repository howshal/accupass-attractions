import React, {useEffect} from "react";
import {Redirect, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {fetchAttractionData} from "../action/actionCreators";
import {attractionDetailSelector} from "../reducer/attractionsReducer";
import LoadingBlock from "./LoadingBlock";
import DetailContainer from "./detail/DetailContainer";
import '../style/AttractionDetail.css';

const AttractionDetail = (props) => {
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
            {(detail === null) ? (
                <div>
                    <h1 className="main-title">景點介紹</h1>
                    <LoadingBlock/>
                </div>
            ) : (detail) ? (
                <div>
                    <h1 className="main-title">{detail.name}</h1>
                    <DetailContainer data={detail}/>
                </div>

            ) : (<Redirect to={'/'}/>)}
        </div>
    );
};

export default AttractionDetail;