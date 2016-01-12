import _ from 'lodash';
import getIndexItems from './src/api.js';
import App from './src/components/app.jsx';
import Index from './src/components/index.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import reducers from './src/reducers.js';

import { getDataAsync, filterIcons, createBreadcumbs } from './src/actions.js';

import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router';
import Dummy from './src/components/dummy.jsx';
import Article from './src/components/article.jsx';
import Menu from './src/components/menu.jsx';

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

const initialState = {
  data: [],
  routing: {}
};

const reducer = combineReducers(Object.assign({},
  {
    main: reducers
  },
  {
   routing: routeReducer
  }
 ));

const store = createStoreWithMiddleware(reducer);
const history = createHistory();
syncReduxAndRouter(history, store);

history.listenBefore(function (location) {
  handleLoad();
});

handleLoad();

function handleLoad() {
  let lastItem = _.last(location.pathname.split('/'));
  store.dispatch(getDataAsync(lastItem));
}


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Index}/>
        <Route path="/articles/:id" component={Article}/>
        <Route path="/leafs/:id" component={Menu}/>
        <Route path="/bar/:id" component={Dummy}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('container')
);
