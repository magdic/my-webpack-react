import React, { Fragment } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Navigation from './components/navigation/navigation'
import Home from './pages/Home'
import About from './pages/About'
import Sample from './pages/Sample'
import Handlebars from './pages/Handlebarsex'

export const App = () => (
  <Fragment>
    <Router history={createBrowserHistory()}>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/sample" component={Sample}/>
        <Route path="/handlebars" component={Handlebars}/>
      </Switch>
    </Router>
  </Fragment>
)
