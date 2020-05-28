import React from 'react'
import { render } from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Header from './Components/Header'
import Main from './Views/Main'
import Projects from './Views/Projects'
import America from './Views/America'
import OkToShop from './Views/OkToShop'
import Copadas from './Views/Copadas'
import Footer from './Components/Footer'
import ScrollToTop from './Components/ScrollToTop'

const App = () =>
  <Router>
    <ScrollToTop />
    <Header />
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/proyectos">
        <Projects />
      </Route>
      <Route path="/america">
        <America />
      </Route>
      <Route path="/oktoshop">
        <OkToShop />
      </Route>
      <Route path="/copadas">
        <Copadas />
      </Route>
    </Switch>
    <Footer />
  </Router>

const wrapper = document.getElementById('app')
wrapper ? render(<App />, wrapper) : false