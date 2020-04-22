import React from 'react';

import Nav from '../Nav';
import WelcomeSection from '../WelcomeSection';

import './App.scss';

const dumbRoutes = [{
    url: 'fake',
    text: 'Fake Link 1'
  }, {
    url: 'fool',
    text: 'Fool Me Twice'
  }, {
    url: 'fly',
    text: 'Fly, You Fool'
}];

function App() {
  return(
    <div className="app">
      <Nav>
        {dumbRoutes}
      </Nav>
      <WelcomeSection />
    </div>
  );
}

export default App;