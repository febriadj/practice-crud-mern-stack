import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Post from './pages/Post'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/post" exact component={ Post } />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
