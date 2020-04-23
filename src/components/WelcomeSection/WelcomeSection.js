import React from 'react';

import Nav from '../Nav';

const dumbRoutes = [{
    url: 'fake',
    text: 'Fake Link 1',
    icon: 'nav-folder'
  }, {
    url: 'fool',
    text: 'Fool Me Twice',
    icon: 'nav-application'
  }, {
    url: 'fly',
    text: 'Fly, You Fool',
    icon: 'nav-dashboard'
}];

function WelcomeSection() {
  return(
    <main>
      <Nav>
        {dumbRoutes}
      </Nav>
      <section>
        <h1>Hello, World!</h1>
      </section>
    </main>
  );
}

export default WelcomeSection;