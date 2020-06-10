import React from 'react';
import { Route, Redirect } from 'react-router-dom';
//@ts-ignore
import { MetaTags } from 'react-meta-tags';
import { ConsoleText } from './component/consoleText';
import { Navbar } from './component/navbar';
import { NavbarMobile } from './component/navbarMobile';

import { EquipmentPage } from './page/equipment';
import { EnlistPage } from './page/enlist';
import { GuidelinesPage } from './page/guidelines';
import { HomePage } from './page/home';

import { Footer } from './component/footer';



function App() {


  
  const getNavbar = ()=> {
    if (window.innerWidth >= 1024) {
      return <Navbar />
    } else {
      return <NavbarMobile />
    };
  };

  return (
    <div className='App'>
      <ConsoleText />
      
      <MetaTags>
        <title>Royal Irish Regiment</title>
        <meta name='viewport' content='width=device-width, initial-scale=1'/>
        <meta property='og:title' content='Royal Irish Regiment' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://1ririshmilsim.com' />
        <meta property='og:description' content='Royal Irish Regiment - Arma 3 Milsim Unit' />
      </MetaTags>

      {getNavbar()}

      <Route exact path='/'>
        <Redirect to='/home' />
      </Route>
  
      <Route path='/home' component={ HomePage } />
      <Route path='/equipment' component={ EquipmentPage } />
      <Route path='/enlist' component={ EnlistPage } />
      <Route path='/guidelines' component={ GuidelinesPage } />

      <Footer />
    </div>
  );
}

export default App;
