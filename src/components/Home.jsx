import React, { Component } from 'react';
import UrlInputField from './UrlInputField';
import fakeData from "./FakeData.json"
import ReportField from './ReportField';


class Home extends Component {
  state = {
    links: []
  }

  render() {
    const { links } = this.state;
    return (
      links[0] ? <ReportField links={links} /> : <UrlInputField handleSubmit={this.handleSubmit} />
    );

  }

  handleSubmit = (event, url) => {
    event.preventDefault();
    this.setState({ links: fakeData })
    // fetch from api
    // set state with links using passed in url string
  }

}

export default Home;