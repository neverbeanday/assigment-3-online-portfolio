import {Label} from '../../components/index';
import React, { Component } from 'react';
import {
  IconCss,
  IconHtml,
  IconIntellij,
  IconJava,
  IconJs,
  IconNpm,
  IconReact,
  IconSass,
  IconSpringBoot,
  IconTerminal,
  IconVsCode,
} from '../../assets';

// styles
import './index.scss';

export default class Skills extends Component {
  render() {
    return (
      <div className='skills'>
        <Label type='title' text='Skills' />
        <Label type='heading' text='Programming Languages & Tools' />
        <div className='skills-icons'>
          <img src={IconHtml} alt='html' />
          <img src={IconCss} alt='html' />
          <img src={IconJs} alt='html' />
          <img src={IconReact} alt='html' />
          <img src={IconSass} alt='html' />
          <img src={IconNpm} alt='html' />
          <img src={IconJava} alt='html' />
          <img src={IconSpringBoot} alt='html' />
          <img src={IconTerminal} alt='html' />
          <img src={IconVsCode} alt='html' />
          <img src={IconIntellij} alt='html' />
        </div>
      </div>
    );
  }
}
