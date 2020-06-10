import React, { Component } from 'react'; 
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

//@ts-ignore
const logo = require('../image/rirlogo.png');

interface navbarMobileState {
    menuExpanded: boolean
}

export class NavbarMobile extends Component<{}, navbarMobileState> {
    constructor(props : any) {
        super(props)

        this.state = {
            menuExpanded: false
        }

        this.handleMenu = this.handleMenu.bind(this);
    }

    handleMenu() {
        var bot = document.getElementById('bot-collap');
        if (bot == null) return;
        
        if (this.state.menuExpanded) {
            enableBodyScroll(document.body);
            bot.style.left = '999px';
        } else {
            disableBodyScroll(document.body);
            bot.style.left = '0px';
        }

        this.setState({
            menuExpanded: !this.state.menuExpanded
        });
    }
  
    Button(to: string, text: string) {
        if (to.includes('http')) return (
        <a href={to} target="_blank" rel="noopener noreferrer" className='link button-container'>
            <div id='button-container-inner'>
                <div id='button-light' />
                <div id='button-text'>
                        <span>{text}</span>
                </div>
            </div>
        </a> 
        )
        return ( 
            <NavLink activeClassName='active' className='link button-container' to={to}>
                <div id='button-container-inner'>
                    <div id='button-light' />
                    <div id='button-text'>
                        <span>{text}</span>
                    </div>
                </div>
        </NavLink>
        );
    }

    render() {

        const menuClass = (this.state.menuExpanded) ? '' : 'hidden';

        return (
            <div id='navbar-mob-container'>
                
                <div id='top'>
                    <div id='logo-container'>
                            <img alt='Royal Irish Regiment Logo' src={logo} height='60px'/>
                            <h2><b>Royal&nbsp;Irish<br/><div id='regiment'>Regiment</div></b></h2>
                    </div>
                    <div id='filler' />
                    <div id='drop-button' onClick={this.handleMenu}>
                        <p><FontAwesomeIcon icon={faBars} /></p>
                    </div>

                </div>
                <div id='bot-collap'>
                    {this.Button('home', 'HOME')}
                    {this.Button('equipment', 'EQUIPMENT')}
                    {this.Button('https://docs.google.com/spreadsheets/d/1rxwK7os-nZB5Lrksq1P9X9YYy-g_KQv5C5siRF1AF_8', 'ORBAT')}
                    {this.Button('guidelines', 'GUIDELINES')}
                    {this.Button('enlist', 'ENLIST')}
                </div>
            </div> 
        )
    }
  }
  