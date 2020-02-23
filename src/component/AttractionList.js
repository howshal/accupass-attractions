import React, {useEffect, useState} from "react";
import {fetchList} from "../model/AttractionsAPI";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchAttractionData} from "../action/actionCreators";
import {attractionsSelector} from "../reducer/attractionsReducer";
import LoadingBlock from "./LoadingBlock";

const AttractionList = (props) => {
    const attractions = useSelector(attractionsSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        if (attractions.length === 0) {
            dispatch(fetchAttractionData(1));
        }
    }, [dispatch]);

    return (
        <div>
            <header>
                <h1>景點列表</h1>
            </header>
            <main>
                {(attractions.length > 0) ? (
                    <ul>
                        {attractions.map((item) => (
                            <li key={item.id}>
                                <Link to={`/${item.id}`}>
                                    <div>
                                        <div>
                                            {(item.images.length > 0) ? (<img src={item.images[0].src}/>) : ''}
                                        </div>
                                        <div>
                                            <h3>{item.name}</h3>
                                            <p>{item.address}</p>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                ): (
                    <LoadingBlock/>
                )}
            </main>
        </div>
    );
};

export default AttractionList;