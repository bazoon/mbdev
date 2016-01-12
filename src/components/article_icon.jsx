import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import config from '../config.js';


var ArticleIcon = React.createClass({

  render() {
    var iconSrc = config.iconPath + this.props.icon;
    return (
      <Link to={`/articles/${this.props.itemId}`}>
        <img src={iconSrc}/>
      </Link>
    );
  }


});

export default ArticleIcon;
