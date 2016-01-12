import _ from 'lodash';
import { GET_DATA, GET_DATA_ASYNC, FILTER_ICONS, CREATE_BREADCRUMBS } from './actions.js';
import { breadcrumbs } from './helpers.js';

export default function actions(state, action) {
  switch(action.type) {
    case GET_DATA:
      return Object.assign({}, state, {
        data: action.data.data
      });
    case FILTER_ICONS:
      return Object.assign({}, state, {
        filteredData: _.filter(state.data, (item) => (item.parentId === action.data))
      });
    case CREATE_BREADCRUMBS:
      return Object.assign({}, state, {
        breadcrumbs: breadcrumbs(state.data, action.data)
      });

    default:
      return Object.assign({}, state);
  }

}
