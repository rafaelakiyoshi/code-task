import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Tab, Tabs, Well } from 'react-bootstrap';
import Title from './components/Title';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="INTERNET RECOGNITION">
            <Title name={'COMMANDS'}/>
            <div className="command">teste</div>
            <div className="command">teste</div>
          </Tab>
          <Tab eventKey={2} title="WAKEWORLD">
            <Title name={'LOGS'}/>
          </Tab>
      </Tabs>
      </div>
    );
  }
}

export default App;
