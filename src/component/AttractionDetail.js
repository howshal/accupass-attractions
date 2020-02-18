import React, {useEffect, useState} from "react";
import {Redirect, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchAttractionData} from "../action/actionCreators";
import {attractionDetailSelector} from "../reducer/attractionsReducer";

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
            <header>
                <h1>#{id}景點內容</h1>
            </header>
            {(detail === null) ? (
                <div>載入中</div>
            ) : (detail) ? (
                <div>
                    {(detail.images.length > 0) ? detail.images.map((image, index) => (
                        <img key={index} src={image.src} alt={image.sub}/>
                    )) : ''}
                    <ul>
                        <li>地址：{detail.address}</li>
                        <li><p>{detail.introduction}</p></li>
                    </ul>
                </div>
            ) : (<Redirect to={'/'}/>)}
        </div>
    );
};

export default AttractionDetail;