import {Label} from '../../components/index';
import React, { Component } from 'react';

// styles
import './index.scss';

export default class Interest extends Component {
  render() {
    return (
      <div className='interest'>
        <Label type='title' text='Interest' />
        <Label text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat provident, nemo minus soluta quo ab ut eos impedit similique quod tenetur accusantium, in a at alias expedita sapiente quisquam libero praesentium totam commodi nisi! Tenetur harum doloremque facilis, quis quam qui, quia, saepe hic similique quaerat nobis fugit odio? Placeat.' />
      </div>
    );
  }
}
