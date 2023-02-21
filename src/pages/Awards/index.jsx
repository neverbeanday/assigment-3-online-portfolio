import {Label} from '../../components/index';
import React, { Component } from 'react';
import {IconReact } from '../../assets';

// styles
import './index.scss';

export default class Awards extends Component {
  render() {
    return (
      <div className='awards'>
        <Label type='title' text='Awards & Certifications' />
        <div className='col'>
          <img src={IconReact} alt='trophy' />
          <Label text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, quam!' />
        </div>
        <div className='col'>
          <img src={IconReact} alt='trophy' />
          <Label text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, quam!' />
        </div>
        <div className='col'>
          <img src={IconReact} alt='trophy' />
          <Label text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, quam!' />
        </div>
        <div className='col'>
          <img src={IconReact} alt='trophy' />
          <Label text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, quam!' />
        </div>
        <div className='col'>
          <img src={IconReact} alt='trophy' />
          <Label text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, quam!' />
        </div>
      </div>
    );
  }
}
