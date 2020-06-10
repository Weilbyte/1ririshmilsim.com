import React, { Component } from 'react'; // let's also import Component
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const logo = require('../image/rirlogo.png')

export class Navbar extends Component<{}> {
  
    Button(to: string, text: string) {
      if (to.includes('http')) return <a href={to} target="_blank" rel="noopener noreferrer" className='link button-container'><p>{text}</p></a>
      return <NavLink activeClassName='active' className='link button-container' to={to}>
      <p>{text}</p>
  </NavLink>;
    }

    render() {
      return (
          <div id='navbar-container'>
            <div id='logo-container'>
                <img alt='Royal Irish Regiment Logo' src={logo} height='85px'/>
                <h2><b>Royal&nbsp;Irish<br/><div id='regiment'>Regiment</div></b></h2>
            </div>
            <div id='button-list'>
                    {this.Button('home', 'HOME')}
                    {this.Button('equipment', 'EQUIPMENT')}
                    {this.Button('https://docs.google.com/spreadsheets/d/1rxwK7os-nZB5Lrksq1P9X9YYy-g_KQv5C5siRF1AF_8', 'ORBAT')}
                    {this.Button('guidelines', 'GUIDELINES')}
            </div>
            <div id='filler'/>
            <NavLink className='link enlist-button' to={'enlist'}>
              <div id='enlist-container'>
                  <div id='enlist-text'>
                  <b>Enlist <FontAwesomeIcon icon={faArrowRight}/></b>
                  </div>
              </div>
            </NavLink>
          </div>
      )
    }
  }
  