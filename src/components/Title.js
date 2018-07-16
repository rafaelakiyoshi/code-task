import React, { Component } from 'react';
import './Title.css';

export default class Title extends Component {
  render() {
    return (
        <div className="Title-header">
          <h1 className="Title-title">{this.props.name}</h1>
        </div>
    );
  }
}
