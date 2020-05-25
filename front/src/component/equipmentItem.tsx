import React, { Component } from 'react';
import { gear } from '../data/gear';


type equipmentItemProps = {
    gear: gear,
    active: undefined | gear,
    change: any
}

export class EquipmentItem extends Component<equipmentItemProps, {}> {
    constructor(props : equipmentItemProps) {
        super(props)

        this.changeItem = this.changeItem.bind(this);
    }

    changeItem() {
        this.props.change(this.props.gear);
    }


    render() {
        var Class : string = 'tab-item-container';
        if (this.props.active === this.props.gear) Class += " active";

        const primaryText = (this.props.gear.designation == null) ? this.props.gear.name : this.props.gear.designation;

        return (
            <div className={Class} onClick={this.changeItem}>
                <div id='inner'>
                    <span id='name'>{primaryText}</span> <span id='type'>{this.props.gear.type}</span>
                </div>
            </div>
        )
    }
  }