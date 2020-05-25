import React, { Component } from 'react';
import { gear } from '../data/gear';

type equipmentDescProps = {
    gear: undefined | gear
}

export class EquipmentDesc extends Component<equipmentDescProps, {}> {
    constructor(props : equipmentDescProps) {
        super(props)
    }

    render() {
        if (this.props.gear === undefined) return ''

        const title = (this.props.gear.designation == null) ? this.props.gear.name : this.props.gear.designation;
        const undertitle = (this.props.gear.designation == null) ? '' : this.props.gear.name;
        const image = require(`../image/${this.props.gear.image}`)
        return (
            <div className='tab-desc-container'>
                <img src={image} />
                <div id='inner'>
                    <span id='title'>{title}</span><br/>
                    <span id='undertitle'>{undertitle}</span><span id='type'>{this.props.gear.type}</span><br/><br/>
                    <div id='description'>{this.props.gear.description}</div>
                </div>
            </div>
        )
    }
  }