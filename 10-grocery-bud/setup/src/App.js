import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [string, setString] = useState('');
  const [items, setItems] = useState([]);
  const [edit, setEdit] = useState(false)

  const clearItems = () => {
    setItems([])
  }

  const filterItems = (id) => {
    const newItems = items.filter((item, index) => {
      return index !== id
    })

    return setItems(newItems)
  }

  const editItem = (item) => {
    setEdit(true);

  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if(string.length) {
      setItems([...items, string])
      setString('')
      console.log(items)
    } else {
      alert('submission cannot be empty!')
    }
  }

  return (
  <div>
  {/* {edit ? editItem: 'null'} */}
  <h2>grocery list</h2>
  <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" placeholder='e.g. eggs' value={string} onChange={event => setString(event.target.value)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
    
    <div>
      <List items={items} filterItems={filterItems} editItem={editItem}/>
    </div>


  <button onClick={clearItems}>Clear Items</button>
  </div>
  )
}

export default App


