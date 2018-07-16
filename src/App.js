import React, { Component } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import IntentRecognition from './components/IntentRecognition';
import WakeWord from './components/WakeWord';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="INTENT RECOGNITION">
            <IntentRecognition />
          </Tab>
          <Tab eventKey={2} title="WAKEWORD">
            <WakeWord />
          </Tab>
        </Tabs>
      </div>
    );
  }
}