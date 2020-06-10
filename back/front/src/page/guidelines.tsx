import React, { Component } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { TextSection } from '../component/textSection';
import { guidelines, general, ingame } from '../data/guidelines';

export class GuidelinesPage extends Component {

    render() {     
      return (
          <div id='page-outer'>
              <div id='page-nopad-inner'>
                  <TextSection title={'Guidelines'} text={guidelines} />
                  <TextSection title={'General'} text={general} />
                  <TextSection title={'In-Game'} text={ingame} />
              </div>
          </div>
      )
    }
  }
  