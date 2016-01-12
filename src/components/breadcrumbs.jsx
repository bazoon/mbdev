import React from 'react';
import config from '../config.js';
import { constructIconPath, itemsToIcons } from '../helpers.js';

var Breadcrumbs = React.createClass({

  render() {
    return (
      <div>
        {
          itemsToIcons(this.props.items)
        }
      </div>
    );
  }


});


export default Breadcrumbs;
