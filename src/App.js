import React, { Component } from "react";
import "./App.css";
import Heading from "./components/Heading";
import Home from "./components/Home";
import { Route } from 'react-router-dom';
import ReportField from "./components/ReportField";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <Route path='/' component={Home} />
        <Route path='/report' component={ReportField} />
        {/* Route to path /report here */}
      </div>
    );
  }
}

export default App;
