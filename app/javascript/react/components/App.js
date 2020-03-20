import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomeIndexContainer from '../containers/HomeIndexContainer'
import CourtShowContainer from '../containers/CourtShowContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeIndexContainer} />
        <Route exact path="/courts/:id" component={CourtShowContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
