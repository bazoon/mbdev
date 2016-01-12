import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import config from '../config.js';


var DummyIcon = React.createClass({

  render() {
    var iconSrc = config.iconPath + this.props.icon;
    return (

        <img src={iconSrc}/>

    );
  }


});

export default DummyIcon;
