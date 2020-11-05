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
import Home from './Team'
import Devices from './Devices'

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
                        <NavItem key={id} eventKey={text}>
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
                    <Route key={id} path={url} component={() => component} />
                  )
                })}
            </main>
            <footer>hey here</footer>
        </React.Fragment>
    )}
    />
</Router>
    )
}

export default Sidebar
