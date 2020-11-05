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

  const footerStyle = {
    backgroundColor: "purple",
    fontSize: "20px",
    color: "white",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%"
  };
  
  const phantomStyle = {
    display: "block",
    padding: "20px",
    height: "60px",
    width: "100%"
  };
  
  function Footer({ children }) {
    return (
      <div>
        <div style={phantomStyle} />
        <div style={footerStyle}>{children}</div>
      </div>
    );
    }
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
                    {social.map((item, index)=> {
                      const {id,url,icon} = item
                      return (
                      <li key={id}>
                        <a href={url}>{icon}</a>
                      </li>   
                      )
                    })}
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
              
        </React.Fragment>
    )}
    />
</Router>
    )
}

export default Sidebar
