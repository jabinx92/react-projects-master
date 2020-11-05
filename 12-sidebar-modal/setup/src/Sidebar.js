import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import Home from './Home'
import Devices from './Devices'
import RootComponent from './RootComponent'

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const Sidebar = () => {

  return (
    
    <Router>
    <Route render={({ location, history }) => (
        <React.Fragment>
            <SideNav
                onSelect={(selected) => {
                    const to = '/' + selected;
                    if (location.pathname !== to) {
                        history.push(to);
                    }
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    {links.map((link, index) => {
                      const {id, url, text, icon} = link;
                      return (
                        <NavItem eventKey={text}>
                        <NavIcon>
                            <i className={`fa fa-fw fa-${text}`} style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                      {icon} {text}
                        </NavText>
                    </NavItem>
                    )
                    })
                    }
                </SideNav.Nav>
            </SideNav>
            <main>
                {links.map((link, index)=> {
                  const{id, url, text, icon, component} = link;
                  return (
                    <Route path={url} component={props => component} />
                  )
                })}
            </main>
        </React.Fragment>
    )}
    />
</Router>
    )
}

export default Sidebar
