import React, { useState } from 'react'
import { useGlobalContext } from './context'

// components
import Navbar from './Navbar'
import CartContainer from './CartContainer'
// items

function App() {
  const { loading } = useGlobalContext()

  const { cart } = useGlobalContext()
  const [items, setItems] = useState(cart)

  const [count, setCount] = useState(0)
  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <main>
      <Navbar items={items}/>
      <CartContainer />
    </main>
  )
}

export default App
