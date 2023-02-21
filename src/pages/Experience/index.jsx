import {Label} from '../../components/index';
import React, { Component } from 'react';

// styles
import './index.scss';

export default class Experience extends Component {
  render() {
    return (
      <div className='experience'>
        <div className='experience-title'>
          <Label type='title' text='Experience' />
        </div>
        <div className='experience-content'>
          <div className='col'>
            <Label type='heading' text='Front End Developer' />
            <Label text='-' />
          </div>
          <Label type='sub-heading' text='PT. ALTROVIS' />
          <Label text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente laborum, magni magnam nemo voluptatibus excepturi id, omnis fugit aspernatur aut illo enim. Sapiente nisi, sit iusto aperiam omnis tempora vitae odio nihil perspiciatis itaque quasi dolore quia necessitatibus quas fuga a? Enim repellendus quisquam aliquam sed reprehenderit minus amet praesentium.' />
        </div>
        <div className='experience-content'>
          <div className='col'>
            <Label type='heading' text='Front End Developer' />
            <Label text='-' />
          </div>
          <Label type='sub-heading' text='PT. PEGADAIAN' />
          <Label text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente laborum, magni magnam nemo voluptatibus excepturi id, omnis fugit aspernatur aut illo enim. Sapiente nisi, sit iusto aperiam omnis tempora vitae odio nihil perspiciatis itaque quasi dolore quia necessitatibus quas fuga a? Enim repellendus quisquam aliquam sed reprehenderit minus amet praesentium.' />
        </div>
        <div className='experience-content'>
          <div className='col'>
            <Label type='heading' text='Front End Developer' />
            <Label text='-' />
          </div>
          <Label type='sub-heading' text='PT. PERMATABANK' />
          <Label text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente laborum, magni magnam nemo voluptatibus excepturi id, omnis fugit aspernatur aut illo enim. Sapiente nisi, sit iusto aperiam omnis tempora vitae odio nihil perspiciatis itaque quasi dolore quia necessitatibus quas fuga a? Enim repellendus quisquam aliquam sed reprehenderit minus amet praesentium.' />
        </div>
      </div>
    );
  }
}
