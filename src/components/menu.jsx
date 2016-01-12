import React from 'react';

import { connect } from 'react-redux';
import ArticleIcon from './article_icon.jsx';
import DummyIcon from './dummy_icon.jsx';
import MenuIcon from './menu_icon.jsx';
import { itemsToIcons } from '../helpers.js';




var Menu = React.createClass({



  render() {
    var { filteredData } = this.props.main;

    var icons = this.props.items ? itemsToIcons(this.props.items) : itemsToIcons(this.props.main.filteredData);
    
    return (
      <div>
        {
          icons
        }
      </div>
    );
  },


});

function select (state) {
  return state;
}

export default connect(select)(Menu);
