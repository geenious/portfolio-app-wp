import React from 'react';
import ReactDOM from 'react-dom';
import BaseLayout from './components/Layout';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home.js';
import About from './components/about.js';

ReactDOM.render(

  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>

, document.getElementById('root'));
registerServiceWorker();
