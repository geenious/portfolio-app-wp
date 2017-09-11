import React from 'react';
import ReactDOM from 'react-dom';
import BaseLayout from './components/Layout';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home.js';
import About from './components/about.js';
import Products from './components/products.js';

ReactDOM.render(

  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/work' component={Products} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>

, document.getElementById('root'));
registerServiceWorker();
