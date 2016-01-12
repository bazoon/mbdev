import { getIndexItems } from './api.js';

export const GET_DATA_ASYNC = "GET_DATA_ASYNC";
export const GET_DATA = "GET_DATA";
export const FILTER_ICONS="FILTER_ICONS";
export const CREATE_BREADCRUMBS="CREATE_BREADCRUMBS";


export function getData (data) {
  return {
    type: GET_DATA,
    data
  };
}

export function filterIcons(data) {
  return {
    type: FILTER_ICONS,
    data
  };
}

export function createBreadcumbs(data) {
  return {
    type: CREATE_BREADCRUMBS,
    data
  };
}

export function getDataAsync (lastItem) {
  return function (dispatch, getState) {
    return getIndexItems()
      .then(function (response) {
        dispatch(getData(response));
        dispatch(filterIcons(lastItem));
        dispatch(createBreadcumbs(lastItem));
      });
  };
}
