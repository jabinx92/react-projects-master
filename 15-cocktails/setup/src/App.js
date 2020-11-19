import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
// import components
import Navigationbar from './components/Navigationbar'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Navigationbar/>
    </div>
  )
}

export default App
