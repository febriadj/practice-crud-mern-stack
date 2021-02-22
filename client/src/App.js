import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Post from './pages/Post'
import NotFound from './pages/NotFound'
import Details from './pages/Details'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/post" component={ Post } />
        <Route path="/details/:title" component={ Details } />
        <Route component={ NotFound } />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
