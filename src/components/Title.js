import React, { Component } from 'react';
import './Title.css';

export default class Title extends Component {
  render() {
    return (
        <div className="Title-header">
          <p className="Title-title">{this.props.name}</p>
        </div>
    );
  }
}
