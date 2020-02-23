import {fetchList} from "../model/AttractionsAPI";
import {ATTRACTION_DATA_LOADED} from "./actionTypes";

export const fetchAttractionData = (page) => async (dispatch) => {
    const attractions = await fetchList(page);
    dispatch(setAttractionData(attractions));
};

export const setAttractionData = (data) => {
    return {
        type: ATTRACTION_DATA_LOADED,
        attractions: data
    }
};