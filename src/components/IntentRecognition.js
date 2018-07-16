import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import './Title.css';
import Dataset from '../data/dataset.json'
import Commands from './Commands.js';
import Title from './Title.js';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default class IntentRecognition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datasets: [],
      dataSelected: '',
      languages: [],
      languageSelected: '',
      commands: []
   }
   this._onDataChange=this._onDataChange.bind(this);
  }

  componentWillMount(){
    this.setState({commands: Dataset[0].data[0].commands})
    this._fetchDatabases().then((res) => {
      this.setState({datasets: res})

      // WHEN THE COMPONENT MOUNTS, THE FIRST DATABASE IS THE DEFAULT, THAT'S WHT THE 0 INDEX
      this.setState({dataSelected: res[0]})
      this._fetchLanguages(0).then((res) => {
        this.setState({languages: res})
        this.setState({languageSelected: res[0]})
        
      })

    })
    
  }
  
  _onDataChange(option) {
    console.log(option.value)
    for(var index in this.state.datasets){
      console.log(this.state.datasets[index], option.value)
      if(this.state.datasets[index] === option.label){
        console.log(index)
        this.setState({commands: Dataset[index].data[0].commands})
        this.setState({dataSelected: option.label})
        this._fetchLanguages(index).then((res) => {
          this.setState({languages: res})
          this.setState({languageSelected: res[0]})
        })
      }
    }
  }
  
  _fetchDatabases() {
    return new Promise((resolve, reject) => {
      // THIS TIMEOUT IS SIMULATING FETCH API DELAY
      setTimeout(() => {
          let datasets = []
          Dataset.forEach(data => {
          console.log(data.database)
          datasets.push(data.database)
        });
        resolve(datasets)
      }, 50)
    })
  }

  _fetchLanguages(index) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let languages = []
        Dataset[index].data.forEach(dataItem => {
        console.log(dataItem.language)
        languages.push(dataItem.language)
      });
      resolve(languages)
    }, 50)
    });
  }

  render() {
    return (
        <div className="InternetRecognition">
          <Dropdown  className="dropdown" options={this.state.datasets} value={this.state.dataSelected} onChange={this._onDataChange} placeholder="Select a Database" />
          <Dropdown  className="dropdown" options={this.state.languages} value={this.state.languageSelected} onChange={this._onSelect} placeholder="Select a Language" />

            <Title name={'COMMANDS'}/>
            <Commands commands={this.state.commands}/>
        </div>
    );
  }
}
