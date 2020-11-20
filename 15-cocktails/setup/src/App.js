import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
// import components
import Navigationbar from './components/Navigationbar'
import Loading from './components/Loading'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [loading, setLoading] = useState(false)

  if(loading) {
    return (
        <div><Loading/></div>
      )
      } else {
      return (
        <div>
          <Router>
          <Navigationbar/>
          <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </div>
      )
    }
}

export default App
