import {Label} from '../../components/index';
import React, { Component } from 'react';

// styles
import './index.scss';

export default class About extends Component {
  render() {
    return (
      <div className='about'>
        <div className='about-title'>
          <Label type='title' text='Ahmad Arif' secondText='Saputra' />
        </div>
        <div className='about-detail'>
          <Label
            type='heading'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, eligendi?'
          />
        </div>
        <div className='about-desc'>
          <Label text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere dolorum, iusto assumenda tempore sunt harum a repellat asperiores accusantium beatae omnis quaerat eum earum reiciendis voluptatum! Sint nostrum corrupti dolore.' />
        </div>
        <div className='about-desc2'>
          <Label text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis et, mollitia a quia animi possimus debitis quam. Quia rem aut doloribus facilis laborum impedit nesciunt vero nostrum quisquam? Quidem, aut.' />
        </div>
      </div>
    );
  }
}
