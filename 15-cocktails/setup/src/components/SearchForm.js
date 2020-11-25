import React from 'react'
import { useGlobalContext } from '../context'
import './SearchForm.css'

const styleInfo = {
  paddingRight:'10px'
}
const elementStyle ={
  border:'solid',
  borderRadius:'10px',
  position:'relative',
  left:'10vh',
  height:'3vh',
  width:'20vh',
  marginTop:'5vh',
  marginBottom:'10vh'
}

const SearchForm = ({changeLetter}) => {
  return (
    
    <div>
    <form>
      <input type="search" placeholder="Search" onChange={(e) => changeLetter(e.target.value)}/>
    </form>
    </div>
  )
}

export default SearchForm
