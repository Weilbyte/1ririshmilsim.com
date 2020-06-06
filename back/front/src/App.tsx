import React from 'react';
import { Route } from 'react-router-dom';
import { Navbar } from './component/navbar';

import { EquipmentPage } from './page/equipment';
import { EnlistPage } from './page/enlist';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route path='/equipment' component={ EquipmentPage } />
      <Route path='/enlist' component={ EnlistPage } />
    </div>
  );
}

export default App;
