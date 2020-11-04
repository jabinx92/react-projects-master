import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  return (
    <div>
    <ul id="nav">
      {links.map((link, index)=> {
        const {id, url, text} = link
        return (
          <li key={id}>
            <a href={url}>{text}</a>
          </li>
        )
      })}
    </ul>

    <ul id="nav">
      {social.map((link, index)=> {
        const {id, url, icon} = link
        return (
          <li key={id}>
            <a href={url}>{icon}</a>
          </li>
        )
      })}
    </ul>
  </div>
  )
}

export default Navbar
