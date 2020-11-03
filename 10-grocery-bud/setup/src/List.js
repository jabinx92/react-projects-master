import React, { useEffect } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({items, filterItems, editItem}) => {
    console.log(items)

  const mapped = items.map((item, index) => {
    return (
      <div key={index}>
        {item}
        <button>
          <FaEdit onClick={() => {editItem(index)}}/>
        </button>
        <button onClick={() => {filterItems(index)}}>
          <FaTrash />
        </button>
      </div>
    )
  })

  return (
  <h2>{items.length > 0 ? mapped : ''}</h2>
  )
}

export default List
