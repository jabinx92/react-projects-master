import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBBadge } from "mdbreact";

const CocktailList = (
  {items}
  // {strDrink, strGlass, strAlcoholic, strDrinkThumb, idDrink}
  ) => {
    return (
      <section className="text-center my-5">
        <MDBRow>
          {
            items.map(item => {
              return (
                <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
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
                    <button onClick={() => {console.log(`you clicked on ${item.strDrink}`)}}>Details</button>
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