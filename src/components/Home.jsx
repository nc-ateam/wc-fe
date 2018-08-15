import React, { Component } from 'react';
import UrlInputField from './UrlInputField';


class Home extends Component {
  state = {
    links: []
  }

  render() {
    return (
      <UrlInputField handleSubmit={this.handleSubmit} />
    );

  }

  handleSubmit = (event, url) => {
    event.preventDefualt();
    console.log(url)
    // fetch from api
    // set state with links using passed in url string
  }

}

export default Home;