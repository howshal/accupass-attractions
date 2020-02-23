import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {fetchAttractionData} from "../action/actionCreators";
import {attractionsSelector} from "../reducer/attractionsReducer";
import LoadingBlock from "./LoadingBlock";
import AttractionCard from "./list/AttractionCard";
import '../style/AttractionList.css';

const AttractionList = () => {
    const attractions = useSelector(attractionsSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        if (attractions.length === 0) {
            dispatch(fetchAttractionData(1));
        }
    }, [dispatch, attractions]);

    return (
        <div className="attraction-list">
            <h1 className="main-title">景點列表</h1>
            <div>
                {(attractions.length > 0) ? (
                    <ul className="list-stream">
                        {attractions.map((item) => (
                            <li key={item.id} className="list-stream__item">
                                <Link to={`/${item.id}`}>
                                    <AttractionCard
                                        name={item.name}
                                        address={item.address}
                                        image={(item.images.length > 0) ? item.images[0] : null} />
                                </Link>
                            </li>
                        ))}
                    </ul>
                ): (
                    <LoadingBlock/>
                )}
            </div>
        </div>
    );
};

export default AttractionList;