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
          <Router>
          <Navigationbar/>
          <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/cocktail/:id">
                <SingleCocktail />
              </Route>
              <Route path="*">
                <Error />
              </Route>
            </Switch>
          </Router>
      )
    }
}

export default App
