import React, {useEffect, useState} from "react";
import {Redirect, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchAttractionData} from "../action/actionCreators";
import {attractionDetailSelector} from "../reducer/attractionsReducer";
import LoadingBlock from "./LoadingBlock";
import DetailBlock from "./detail/DetailBlock";

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
        <div>
            {(detail === null) ? (
                <div>
                    <h1>#{id}景點內容</h1>
                    <LoadingBlock/>
                </div>
            ) : (detail) ? (
                <div>
                    <h1>{detail.name}</h1>
                    <DetailBlock data={detail}/>
                </div>

            ) : (<Redirect to={'/'}/>)}
        </div>
    );
};

export default AttractionDetail;