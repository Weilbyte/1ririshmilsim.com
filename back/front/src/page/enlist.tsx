import React, { Component } from 'react'; 
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { EnlistForm } from '../component/enlistForm';

interface EquipmentPageState {
  currentTab: string,
  currentItem: undefined,
  selected: undefined,
}

export class EnlistPage extends Component<any, EquipmentPageState> {
    constructor(props : any) {
      super(props)

      this.state = {
        currentTab: 'weapons',
        currentItem: undefined,
        selected: undefined
      }
    }

    render() {     
      return (
          <div id='page-outer'>
              <div id='page-inner'>
                <div id='enlist-center'> 
                <EnlistForm />
                </div>
              </div>
          </div>
      )
    }
  }
  