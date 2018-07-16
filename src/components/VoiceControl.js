import React, { Component } from 'react';
import {Image} from 'react-bootstrap';
import './VoiceControl.css';

export default class VoiceControl extends Component {
  render() {
    return (
      <div className="micro">
        <Image className="image" src="http://www.somplay.com.br/wp-content/uploads/2017/11/microphone-2104091_960_720-600x600.png" />
      </div>
    );
  }
}
