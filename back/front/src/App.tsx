import React from 'react';
import { Route, Redirect } from 'react-router-dom';
//@ts-ignore
import { MetaTags } from 'react-meta-tags';
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
    <div className="App">
      <MetaTags>
        <title>Royal Irish Regiment</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
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
