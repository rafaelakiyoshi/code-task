import React, { Component } from 'react';
import Title from './Title.js';
import VoiceControl from './VoiceControl.js';
import Logs from './Logs.js';
import './IntentRecognition.css';
import LogsDataset from '../data/logs.json';

export default class WakeWord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: []
    }
  }

  componentWillMount() {
    this._fetchLogs().then((logs) => {
      this.setState({logs})
    })
  }

  _fetchLogs() {
    return new Promise((resolve, reject) => {
      let logs = []
      setTimeout(() => {
        logs = LogsDataset
        resolve(logs);
     }, 50) 
    })
  }
  render() {
    return (
      <div className="WakeWorld">
      <div className="IntentBody">
          <div className="voicePaddingLog">
            <VoiceControl />
          </div>
          <Title name={'LOGS'}/>
          <Logs logs={this.state.logs}/>
      </div>
    </div>
    );
  }
}
