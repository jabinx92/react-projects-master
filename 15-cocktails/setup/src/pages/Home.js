import React, { useEffect, useState } from 'react'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'
import Loading from '../components/Loading'
import EcommercePage from '../components/EcommercePage'
const Home = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [letter, setLetter] = useState("")

  function changeLetter(event) {
    return setLetter(event)
  }

  console.log(letter)
 
  const link = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${letter}`
  useEffect(() => {
    console.log(link)
    fetch(link)
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
  }, [link])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div><Loading/></div>;
  } else {
    return (
      <>
      <SearchForm changeLetter={changeLetter}/>
      <div>
      <EcommercePage/>
      </div>
      <ul>
        {items ? <CocktailList items={items}/> : <div>Nothing to show</div>}
      </ul>
      </>
    );
  }
}

export default Home
