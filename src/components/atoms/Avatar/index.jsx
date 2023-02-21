import { ImageProfile } from '../../../assets/images/index';
import React, { Component } from 'react';

// styles
import './index.scss';

export default class Avatar extends Component {
  render() {
    return <img src={ImageProfile} alt='profile' className='avatar' />;
  }
}
