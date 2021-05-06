import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//  Pages
import AuthPage from './pages/AuthPage/AuthPage'
import HomePage from './pages/HomePage/HomePage'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/auth" component={AuthPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  )
}

export default App

