import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


type equipmentTabProps = {
    tabs: string[],
    default?: string | undefined,
    change: any
}

interface equipmentTabState {
    activeTab: string | undefined
}

export class EquipmentTab extends Component<equipmentTabProps, equipmentTabState> {
    constructor(props : equipmentTabProps) {
        super(props)

        this.state = {
            activeTab: this.props.default
        }
        this.changeTab = this.changeTab.bind(this);
      }


    tabButton(text: string) {
        var buttonClass : string = 'tab-button';
        if (text.toLowerCase() == this.state.activeTab) buttonClass += ' active';
        return (
          <div onClick={this.changeTab} className={buttonClass}>
            <span>{text}</span>
          </div>
        )
    }

    changeTab(event : any) {
        const clickedTab = event.currentTarget.children[0].textContent.toLowerCase();
        this.setState({
            activeTab: clickedTab
        });
        this.props.change(clickedTab);
    }

    render() {

        const tabs = this.props.tabs.map((buttonName) => {
            return this.tabButton(buttonName);
        })

        return (
        <div id='tab-container'>
            {tabs}
          </div>
        )
    }
  }