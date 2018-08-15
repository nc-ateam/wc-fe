import React, { Component } from 'react';
import Graph from './Graph';
import DownloadButton from './DownloadButton';
import TxtReport from './TxtReport';

class ReportField extends Component {
  render() {
    return (
      <div>
        <TxtReport />
        <Graph />
        <DownloadButton />
      </div>
    );
  }
}

export default ReportField;