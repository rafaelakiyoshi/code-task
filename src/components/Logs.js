import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import './Logs.css';
  export default class Logs extends Component {
    render() {
      return (
        <div className="Logs">
          <ListGroup>
            {this.props.logs.map((log, index) => {
              return (
                <ListGroupItem className="log" key={index}>{log}</ListGroupItem>
              )
            })}
          </ListGroup>
        </div>
    );
  }
}
