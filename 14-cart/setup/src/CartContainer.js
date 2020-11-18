import React, { useState } from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from './context'

const CartContainer = () => {
  const { cart } = useGlobalContext()
  const [items, setItems] = useState(cart)
  let total = 0;
  cart.map(item => {
   return total += item.price
  })

  const [cost, setCost] = useState(0);
  console.log(cart)
  function removeItem (id) {
    console.log('time to go')
    const filtered = items.filter(item => {
      return item.id !== id
    })
    setItems(filtered)
  }

  function updateCost (price) {
    setCost(price + cost)
  }
  if (items.length === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    )
  }
  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {items.map((item) => {
          return <CartItem key={item.id} {...item} updateCost={updateCost} removeItem={removeItem}/>
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${(total + cost).toFixed(2)}</span>
          </h4>
        </div>
        <button
          className='btn clear-btn'
          onClick={() => console.log('clear cart')}
        >
          clear cart
        </button>
      </footer>
    </section>
  )
}

export default CartContainer
