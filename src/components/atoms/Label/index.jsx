import React, { Component } from 'react';

// styles
import './index.scss';

export default class Label extends Component {
  render() {
    const { type, text, secondText } = this.props;

    return (
      <>
        {type === 'title' ? (
          <h1 className='label-title'>
            {text}
            <span className='label-title-secondary'>{secondText}</span>
          </h1>
        ) : type === 'heading' ? (
          <h3 className='label-heading'>{text}</h3>
        ) : type === 'sub-heading' ? (
          <h4 className='label-sub-heading'>{text}</h4>
        ) : (
          <p className='label-sub-heading'>{text}</p>
        )}
      </>
    );
  }
}
