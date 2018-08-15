import React, { Component } from 'react';
import Graph from './Graph';
import DownloadButton from './DownloadButton';
import TxtReport from './TxtReport';

class ReportField extends Component {
  render() {
    const { links } = this.props
    return (
      <div>
        <TxtReport />
        <Graph links={links} />
        <DownloadButton />
      </div>
    );
  }
}

export default ReportField;
