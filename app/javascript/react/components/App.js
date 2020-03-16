import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomeIndexContainer from '../containers/HomeIndexContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeIndexContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
