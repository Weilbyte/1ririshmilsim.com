import React from 'react';
import { Route } from 'react-router-dom';
import { Navbar } from './component/navbar';

import { EquipmentPage } from './page/equipment';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route path='/equipment' component={ EquipmentPage } />
    </div>
  );
}

export default App;
