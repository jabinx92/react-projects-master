import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [food, setFood] = useState(items);
  

  return (
  <div>
    <h2>Our Menu</h2>
    <Categories/>
    <Menu/>
  </div>
  );
}

export default App;
