import React, { Component } from 'react';
import './Title.css';
import './IntentRecognition.css';
import Dataset from '../data/dataset.json'
import Commands from './Commands.js';
import Title from './Title.js';
import VoiceControl from './VoiceControl.js';

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
   this._onLanguageChange=this._onLanguageChange.bind(this);
  }

  componentWillMount(){
    /* 
      THIS FUNCTION IS CALLED WHEN THE COMPONENT WILL BE MOUNT
      THIS FUNCTION IS RESPONSIBLE TO FILL OUT THE DATA AT THE STATE, WITCH IS GONNA BE USED BY THE VIEW COMPOENENTS
      IN ADITION, THIS FUNCTION SETS AS DEFAULT, THE FIRST LANGUAGE AND THE FIRST DATABASE.
    */
    this.setState({commands: Dataset[0].data[0].commands})
    this._fetchDatabases().then((res) => {
      this.setState({datasets: res})

      // WHEN THE COMPONENT MOUNTS, THE FIRST DATABASE IS THE DEFAULT, THAT'S WHT THE 0 INDEX
      this.setState({dataSelected: res[0]})
      this._fetchLanguages(0).then((res) => {
        this.setState({languages: res})
        this.setState({languageSelected: res[0]})
        
      });

    });
    
  }
  
  _onLanguageChange(option) {
    /* 
      THIS FUNCTION IS CALLED WHEN THE LANGUAGE CHANGES (THE SECOND DROPDOWN)
      THIS FUNCTION UPDATES THE COMMANDS TO SHOW
    */
    this._fetchCommands(this.state.dataSelected, option.value).then((res) => {
      this.setState({commands: res})
      this.setState({languageSelected: option.value})

    });
  }

  _onDataChange(option) {
    /* 
      THIS FUNCTION IS CALLED WHEN THE DATABASE CHANGES (THE FIRST DROPDOWN)
      THIS FUNCTION UPDATES THE SECOND DROPDOWN OPTIONS, AND SET THE FIRST LANGUAGE OPTION AS A SELECTED
    */
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
        });
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
        if(datasets.length === 0){
          reject('Error: Couldn\'t return the databases');
        } else {
          resolve(datasets);
        }
      }, 50)
    })
  }

  _fetchLanguages(index) {
    return new Promise((resolve, reject) => {
      // THIS TIMEOUT IS SIMULATING FETCH API DELAY
      setTimeout(() => {
        let languages = []
        Dataset[index].data.forEach(dataItem => {
        console.log(dataItem.language)
        languages.push(dataItem.language)
      });
      if(languages.length === 0){
        reject('Error: Couldn\'t return the languages');
      } else {
        resolve(languages);
      }
    }, 50)
    });
  }

  _fetchCommands(databaseSelected, languageSelected){
    // THIS FUNCTION SIMULATE A FETCH INTO THE API TO GET THE COMMANDS, AND THE QUERY SHOULD USE THOSE PARAMETERS RECEIVED.
    // INSTEAD OF FETCHING, THIS FUNCTION IS FILTERING THE JSON.
    return new Promise((resolve, reject) => {
      Dataset.forEach(data => {
        if(data.database === databaseSelected){
          data.data.forEach(innerData => {
            if(innerData.language === languageSelected){
              if(innerData.commands.length === 0){
                reject('Error: Couldn\'t return the languages');
              } else {
                resolve(innerData.commands);
              }
            }
          });
        }
      });
    })
  }

  render() {
    return (
        <div className="InternetRecognition">
          <Dropdown  className="dropdown" options={this.state.datasets} value={this.state.dataSelected} onChange={this._onDataChange} placeholder="Select a Database" />
          <Dropdown  className="dropdown" options={this.state.languages} value={this.state.languageSelected} onChange={this._onLanguageChange} placeholder="Select a Language" />
          <div className="IntentBody">
              <div className="voicePadding">
                <VoiceControl />
              </div>
              <Title name={'COMMANDS'}/>
              <Commands commands={this.state.commands}/>
          </div>
        </div>
    );
  }
}
