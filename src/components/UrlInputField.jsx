import React, { Component } from 'react';
import UrlInputBox from './UrlInputBox';
import UrlSubmitButton from './UrlSubmitButton';

class UrlInputField extends Component {
  state = {
    input: ""
  };
  render() {
    return (
      <form onSubmit={(event) => this.props.handleSubmit(event, this.state.input)}>
        <UrlInputBox handleInputChange={this.handleInputChange} />
        <UrlSubmitButton />
      </form>
    );
  }

  handleInputChange = (event) => {
    this.setState({ input: event.target.value })
  }

}

export default UrlInputField;
