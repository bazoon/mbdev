import React from 'react';
import { connect } from 'react-redux';
import { getArticle } from '../api.js';


var Article = React.createClass({

  getInitialState() {
    return {
      content: 'Loading...'
    };
  },

  componentDidMount() {
    getArticle(this.props.params.id)
      .then((response) => {
        this.setState({ content: response.data });
      });
  },

  render() {
    console.log('Article', this.props.params);
    return (
      <div>
        Article
        {this.state.content}
      </div>
    );
  }


});


export default Article;
