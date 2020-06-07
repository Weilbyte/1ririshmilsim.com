import React, { Component } from 'react';

type textSectionProps = {
    title: string,
    text: string
}

export class TextSection extends Component<textSectionProps, {}> {
    constructor(props : textSectionProps) {
        super(props)
    }
    
    render() {
        return (
            <div className='text-outer'>
                <h1 id='title'>{this.props.title}</h1>
                <div id='text-inner'>
                    <div dangerouslySetInnerHTML={{ __html: this.props.text }} />
                </div>
            </div>
        )
    }
  }