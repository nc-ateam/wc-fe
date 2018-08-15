import React, { Component } from "react";
import "./App.css";
import Heading from "./components/Heading";
import Home from "./components/Home";
import { Route, Switch } from 'react-router-dom';
import ReportField from "./components/ReportField";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <Switch>
          <Route path='/report' component={ReportField} />
          <Route strict path='/' component={Home} />
          {/* Route to path /report here */}
        </Switch>
      </div>
    );
  }
}

export default App;
