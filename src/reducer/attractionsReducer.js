import {ATTRACTION_DATA_LOADED} from "../action/actionTypes";

export const attractionsSelector = state => state.attractions;

/**
 *
 * @param {Object} state
 * @param {int} id
 * @return {boolean|*}
 */
export const attractionDetailSelector = (state, id) => {
    const attractions = attractionsSelector(state);

    if (attractions.length > 0) {
        for (let i=0; i<attractions.length; i++) {
            console.log('attractionId: ', attractions[i].id);
            if (parseInt(attractions[i].id) === id) return attractions[i];
        }

        return false;
    } else {
        return null;
    }
};

export const attractionsReducer = (prevState = [], action) => {
    switch (action.type) {
        case ATTRACTION_DATA_LOADED:
            return [...prevState, ...action.attractions];
        default:
            return prevState;
    }
};

export default attractionsReducer;
