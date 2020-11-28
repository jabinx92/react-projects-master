import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBBadge } from "mdbreact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import Cocktail from './Cocktail'

const CocktailList = ({items}) => {

  let history = useHistory();

  function handleClick() {
    history.push("/cocktail");
  }


    return (
      <section className="text-center my-5">
        <MDBRow>
          {
            items.map(item => {
              return (
                <MDBCol lg="3" md="6" className="mb-lg-0 mb-4" key={item.idDrink}>
                  <MDBCard className="align-items-center">
                    <MDBCardImage
                    src={item.strDrinkThumb}
                    top
                    alt={item.strDrink}
                    overlay="white-slight"
                    />
                    <MDBCardBody className="text-center">
                    <a href="#!" className="grey-text">
                    <h5>{item.strDrink}</h5>
                    </a>
                    <h5>
                    <strong>
                    <a href="#!" className="dark-grey-text">
                      {item.strGlass}{" "}
                    </a>
                    </strong>
                    </h5>
                    <h4 className="font-weight-bold blue-text">
                      <strong>{item.strAlcoholic}</strong>
                    </h4>
                    </MDBCardBody>
                    <Router>
                    <ul>
                      <li>
                        <Link to='/cocktail'>Details</Link>
                      </li>
                    </ul>
                    <Switch>
                        <Route path="/cocktail">
                          <Cocktail items={items}/>
                        </Route>
                      </Switch>
                    </Router>
                    <button type="button" onClick={handleClick}>
                      Go Cocktail component
                    </button>
                    </MDBCard>
                </MDBCol>
              )
            })
          }
        </MDBRow>
      </section>
      );
  
}

export default CocktailList;