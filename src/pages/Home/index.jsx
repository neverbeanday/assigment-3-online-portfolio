import {Label} from '../../components/index';
import React, { Component } from 'react';

// styles
import './index.scss';

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        <Label type='title' text='Ahmad Arif' secondText='Saputra' />
        <Label type='heading' text='Welcome in Blank Space' />
      </div>
    );
  }
}
