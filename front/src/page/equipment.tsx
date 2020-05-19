import React, { Component } from 'react'; // let's also import Component
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { EquipmentTab } from '../component/equipmentTab';

interface EquipmentPageState {
  currentTab: string,
  selected: string | undefined,
}

export class EquipmentPage extends Component<any, EquipmentPageState> {
    constructor(props : any) {
      super(props)

      this.state = {
        currentTab: 'weapons',
        selected: undefined
      }
      this.tabChange = this.tabChange.bind(this);
    }

    tabChange(tabName : string) {
      this.setState({
        currentTab: tabName
      })
    };

    render() {
      return (
          <div id='page-outer'>
              <div id='page-inner'>
                <div id='equipment-inner'>
                  <div id='left'>
                    <EquipmentTab tabs={['Uniform', 'Weapons', 'Vehicles']} default={this.state.currentTab} change={this.tabChange}/>
                  </div>
                </div>
              </div>
          </div>
      )
    }
  }
  