import React, { Component } from 'react';

type imgSectionProps = {
    id: string,
    text?: string
}

export class ImgSection extends Component<imgSectionProps, {}> {
    constructor(props : imgSectionProps) {
        super(props)

        this.midText = this.midText.bind(this);
    }

    midText() {
        if (this.props.text != null) {
            return <h1>{this.props.text}</h1>
        } 
        return null;
    }
    
    render() {


        return (
            <div id={this.props.id} className='image-parallax'>
                <this.midText />
            </div>
        )
    }
  }