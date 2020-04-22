import React from 'react';

import Nav from '../Nav';

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