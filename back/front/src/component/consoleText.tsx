import React, { Component } from 'react';

export class ConsoleText extends Component<{}> {
    componentDidMount() {
        console.log('%cHello there!', 'font-size: 42px; color: purple');
        console.log('%cBetter not be pasting anything in here.', 'font-size: 20px; color: purple');
    }

    render() {
      return null;
    }
  }
  