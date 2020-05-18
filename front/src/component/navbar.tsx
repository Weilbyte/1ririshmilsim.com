import React, { Component } from 'react'; // let's also import Component
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const logo = require('../image/logo.png')

export class Navbar extends Component<{}> {

    componentDidMount() {
      console.log("Navbar mounted")
    }
  
    Button(to: string, text: string) {
        return <NavLink activeClassName='active' className='link button-container' to={to}>
            <p>{text}</p>
        </NavLink>;
    }

    render() {
      return (
          <div id='navbar-container'>
            <div id='logo-container'>
                <img alt='Royal Irish Regiment Logo' src={logo} height='95px'/>
                <h2><b>Royal&nbsp;Irish<br/><div id='regiment'>Regiment</div></b></h2>
            </div>
            <div id='button-list'>
                    {this.Button('about', 'ABOUT')}
                    {this.Button('equipment', 'EQUIPMENT')}
                    {this.Button('faq', 'FAQ')}
                    {this.Button('orbat', 'ORBAT')}
                    {this.Button('rules', 'RULES')}
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
  