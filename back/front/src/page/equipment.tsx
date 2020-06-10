import React, { Component } from 'react'; // let's also import Component
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { EquipmentTab } from '../component/equipmentTab';
import { EquipmentItem } from '../component/equipmentItem';
import { EquipmentDesc } from '../component/equipmentDesc';

import { GearWeapons, GearUniforms, GearVehicles, gear} from '../data/gear';

interface EquipmentPageState {
  currentTab: string,
  currentItem: undefined | gear,
  selected: string | undefined,
}

export class EquipmentPage extends Component<any, EquipmentPageState> {
    constructor(props : any) {
      super(props)

      this.state = {
        currentTab: 'weapons',
        currentItem: undefined,
        selected: undefined
      }
      this.tabChange = this.tabChange.bind(this);
      this.itemChange = this.itemChange.bind(this);
    }

    tabChange(tabName : string) {
      this.setState({
        currentTab: tabName
      })
    };

    itemChange(item : gear) {
      this.setState({
        currentItem: item
      });
    }

    render() {

      var category : any = undefined;

      if (this.state.currentTab == 'vehicles') {
        category = GearVehicles;
      } else if (this.state.currentTab == 'weapons') {
        category = GearWeapons;
      } else {
        category = GearUniforms;
      }

      const items =  category.map((item : any) => {
          return (
            <EquipmentItem gear={item} change={this.itemChange} active={this.state.currentItem}/>
          );
      });
      
      return (
          <div id='page-outer'>
              <div id='page-inner'>
                <div id='equipment-inner'>
                  <div id='left'>
                    <EquipmentTab tabs={['Uniforms', 'Weapons', 'Vehicles']} default={this.state.currentTab} change={this.tabChange}/>
                    {items}
                  </div>
                  <div id='right'>
                    <EquipmentDesc gear={this.state.currentItem} />
                  </div>
                </div>
              </div>
          </div>
      )
    }
  }
  