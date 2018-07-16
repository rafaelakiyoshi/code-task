import React from 'react';
import IntentRecognition from './components/IntentRecognition';
import Title from './components/Title';
import Logs from './components/Logs';
import Commands from './components/Commands';
import VoiceControl from './components/VoiceControl';
import Dropdown from 'react-dropdown';
import { shallow } from 'enzyme';
import WakeWord from './components/WakeWord';
import { ListGroupItem, Image } from 'react-bootstrap';

describe('Tests for views', () => {
  
  describe('Intent Recognition', () => {
    const IR = shallow(<IntentRecognition />);
  
    it('Should show two dropdowns', () => {
      expect(IR.find(Dropdown).length).toBe(2);
    });
    it('Should show microphone', () => {
      expect(IR.find(VoiceControl).length).toBe(1);
    });
  
    it('Should show content title', () => {
      expect(IR.find(Title).length).toBe(1);
    });
    it('Should show list of commands', () => {
      expect(IR.find(Commands).length).toBe(1);
    });
  
  })
  
  describe('WakeWord', () => {
    const WW = shallow(<WakeWord />);
  
    it('Should show microphone', () => {
      expect(WW.find(VoiceControl).length).toBe(1);
    });
  
    it('Should show content title', () => {
      expect(WW.find(Title).length).toBe(1);
    });
  
    it('Should show list of Logs', () => {
      expect(WW.find(Logs).length).toBe(1);
    });
  })

})

describe('Tests for individual Components', () => {
  describe('Commands', () => {
    let mockCommands = ['command1', 'command2']
    const CM = shallow(<Commands commands={mockCommands}/>);

    it('Should show two Commands', () => {
      expect(CM.find('.command').length).toBe(2);
    });
  });
  describe('Logs', () => {
    let mockLogs = ['log1', 'log2', 'log3']
    const LG = shallow(<Logs logs={mockLogs}/>);

    it('Should show three Logs', () => {
      expect(LG.find(ListGroupItem).length).toBe(3);
    });

  });
  describe('Title', () => {
    const TT = shallow(<Title name={'mockTitleName'}/>)

    it('Should show Title with name = mockTitleName', () => {
      expect(TT.find('.Title-title').text()).toBe('mockTitleName');
    });
    
  });
  describe('VoiceControl', () => {
    let imgSource = 'http://www.somplay.com.br/wp-content/uploads/2017/11/microphone-2104091_960_720-600x600.png'
    const VC = shallow(<VoiceControl />);

    it('Should show an Image of a microphone', () => {
      expect(VC.find(Image).prop('src')).toBe(imgSource);
    });
  });
})
