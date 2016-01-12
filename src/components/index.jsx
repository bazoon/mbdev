import React from 'react';
import Menu from './menu.jsx';
import { connect } from 'react-redux';
const { Link } = require('react-router');
import { getData, getDataAsync } from '../actions.js';


var Index = React.createClass({

  render() {
    let { data } = this.props.main;
    let { dispatch } = this.props;

    var indexItems = data ? data.filter(function (item) {
      return item.parentId == 'index';
    }) : [];





    return (
      <div>
        Index
        <crumbs/>
        <Menu items={ indexItems }/>
      </div>

    );
  }


});


function select (state) {
  return state;
}

export default connect(select)(Index);
