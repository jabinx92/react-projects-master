import React, { useEffect, useState } from 'react'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'
import Loading from '../components/Loading'
import EcommercePage from '../components/EcommercePage'

import {  MDBRow } from "mdbreact";

const Home = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.drinks);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div><Loading/></div>;
  } else {
    return (
      <>
      <SearchForm/>
      <div>
      <EcommercePage/>
      </div>
      <ul>
        {items.map(item => (
          <li key={item.idDrink}>
            {console.log(item)}
            <CocktailList key={item.idDrink} {...item}/>
          </li>
        ))}
      </ul>
      </>
    );
  }
}

export default Home
