import React from 'react';
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from 'react-icons/fa';
import Home from './Home'
import Devices from './Devices'
import RootComponent from './RootComponent';

export const links = [
  {
    id: 1,
    url: '/',
    text: 'Home',
    icon: <FaHome />,
    component: <RootComponent/>
  },
  {
    id: 2,
    url: '/team',
    text: 'Team',
    icon: <FaUserFriends />,
    component: <Home/>
  },
  {
    id: 3,
    url: '/projects',
    text: 'Projects',
    icon: <FaFolderOpen />,
    component: <Devices/>

  },
  {
    id: 4,
    url: '/calendar',
    text: 'Calendar',
    icon: <FaCalendarAlt />,
    component: <Devices/>

  },
  {
    id: 5,
    url: '/documents',
    text: 'Documents',
    icon: <FaWpforms />,
    component: <Devices/>

  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: <FaBehance />,
  },
  {
    id: 5,
    url: 'https://www.twitter.com',
    icon: <FaSketch />,
  },
];
