import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

type SimpleInput = {
    items: string[]
}


interface SimpleState {
    ddOpen: boolean
    text: string
}

export class DropDownSimple extends Component<SimpleInput, SimpleState> {
    constructor(props : SimpleInput) {
        super(props)

        this.state = {
            ddOpen: false,
            text: this.props.items[0]
        }
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.changeOption = this.changeOption.bind(this);
      }

    toggleDropdown() {
        this.setState({
            ddOpen: !this.state.ddOpen
        })
    }

    changeOption(e : any) {
        this.setState({
            text: e.currentTarget.textContent
        });
    }

    render() {
        const getItems : any = this.props.items.map((item) => 
            <DropdownItem onClick={this.changeOption}>{item}</DropdownItem>
        );

        return (
          <div id='dropdown-container'>
            <Dropdown isOpen={this.state.ddOpen} toggle={this.toggleDropdown}>
            <DropdownToggle caret>
                {this.state.text}
            </DropdownToggle>
            <DropdownMenu>
                {getItems}
            </DropdownMenu>
            </Dropdown>
          </div>    
      )
    }
  }