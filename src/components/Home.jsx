import React, { Component } from 'react';
import UrlInputField from './UrlInputField';

class Home extends Component {
  state = {
    links: []
  }

  render() {
    return (
      <div>
        <UrlInputField handleSubmit={this.handleSubmit} />
      </div>
    );

  }

  handleSubmit = (event, url) => {
    event.preventDefualt();
    // fetch from api
    // set state with links using passed in url string
  }

}

export default Home;