import React, { Component } from 'react';

export class ConsoleText extends Component<{}> {
    componentDidMount() {
        console.log('%cHello there!', 'font-size: 42px; color: purple');
    }

    render() {
      return null;
    }
  }
  