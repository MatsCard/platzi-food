import React from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import Layout from '../layout/Layout'
import Home from './../views/Home'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/platzi-food" component={Home} />
        </Layout>
      </Switch> 
    </BrowserRouter>
  );
}

export default App;
