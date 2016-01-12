import React from 'react';
import { connect } from 'react-redux';
import { getData, getDataAsync } from '../actions.js';
import Breadcrumbs from './breadcrumbs.jsx';
const { Link } = require('react-router');


var App = React.createClass({

  render() {
    let { breadcrumbs } = this.props.main;
    var crumbs = breadcrumbs ? <Breadcrumbs items={breadcrumbs}/> : <div>No breadcrumbs</div>;

    return (
      <div>
        {crumbs}
        {this.props.children}
      </div>
    );
  }
});


function select (state) {
  return state;
}

export default connect(select)(App);
