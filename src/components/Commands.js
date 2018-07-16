import React, { Component } from 'react';
import './Commands.css';

export default class Commands extends Component {
  render() {
    return (
      <div>
        {this.props.commands.map((command, index) => {
          return (
            <div key={index} className="command">{command}</div>
          )
        })}
      </div>
    );
  }
}
