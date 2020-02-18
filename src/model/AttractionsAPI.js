const CORS_BYPASS = 'https://cors-anywhere.herokuapp.com/';
const BASE_URL = 'https://www.travel.taipei/open-api';

/**
 *
 * @param {int} page
 * @return {Promise<any>}
 */
export const fetchList = async (page = 1) => {
    return await fetchAPI('/zh-tw/Attractions/All?page=' + page)
        .then(res => res.data);
};

/**
 * fetch method of the main API.
 * @param {string} path API path to fetch.
 * @param {'GET'|'HEAD'|'POST'|'PUT'|'DELETE'} method - Call method.
 * @param {null|Object} data - Data to embed on body.
 * @param {'form'|'json'} dataType - body data type of the request.
 * @returns {Promise<any>} promise.
 */
const fetchAPI = async (path, method = 'GET', data = null, dataType = 'form') => {
    if (['GET', 'HEAD', 'POST', 'PUT', 'DELETE'].indexOf(method) === -1) {
        throw new Error('invalid method.');
    }

    if (['form', 'json'].indexOf(dataType) === -1) {
        throw new Error('invalid dataType.');
    }

    const parameters = {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-Requested-With': 'XMLHttpRequest',
            'Cache': 'no-cache',
        },
        mode: 'cors',
    };

    if (['POST', 'PUT', 'DELETE'].indexOf(method) >= 0) {
        //parameters.body = (dataType === 'json') ? JSON.stringify(data) : queryString.stringify(data);
        parameters.headers['Content-Type'] = (dataType === 'json') ? 'application/json' : 'application/x-www-form-urlencoded';
    }

    try {
        return await fetch(CORS_BYPASS + BASE_URL + path, parameters)
            .then(function(response) {
                return response.json();
            });
    } catch (e) {
        console.debug('data fetching is failed.', e);
        throw e;
    }
};

export default {fetchAPI};
