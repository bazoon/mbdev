import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import config from '../config.js';
import { pushMenuIcon } from '../actions.js';



var MenuIcon = React.createClass({

  render() {


    var iconSrc = config.iconPath + this.props.icon;
    return (
      <Link to={`/leafs/${this.props.itemId}`}>
        <img src={iconSrc}/>
      </Link>
    );
  }

});

export default MenuIcon;
