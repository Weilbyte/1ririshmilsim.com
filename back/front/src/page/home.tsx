import React, { Component } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { TextSection } from '../component/textSection';
import { ImgSection } from '../component/imgSection';
import { whoText } from '../data/text';
 
export class HomePage extends Component {

    render() {     
      return (
          <div id='page-outer'>
              <div id='home-inner'>
                    <ImgSection id='img-top' text='Royal Irish Regiment' />
                    <TextSection title={'WHO.'} text={whoText} />
                    <ImgSection id='img-mid' />
                    <TextSection title={'WHEN.'} text={''} />
                    <ImgSection id='img-bot' />
                    <TextSection title={'HOW.'} text={''} />
              </div>
          </div>
      )
    }
  }
  