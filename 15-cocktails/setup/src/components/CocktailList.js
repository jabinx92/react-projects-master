import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBBadge } from "mdbreact";

const CocktailList = ({strDrink, strGlass, strAlcoholic, strDrinkThumb}) => {
  return (
    <section className="text-center my-5">
      {/* <MDBRow> */}
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard className="align-items-center">
            <MDBCardImage
              src={strDrinkThumb}
              top
              alt={strDrink}
              overlay="white-slight"
            />
            <MDBCardBody className="text-center">
              <a href="#!" className="grey-text">
                <h5>{strDrink}</h5>
              </a>
              <h5>
                <strong>
                  <a href="#!" className="dark-grey-text">
                    {strGlass}{" "}
                  </a>
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                <strong>{strAlcoholic}</strong>
              </h4>
            </MDBCardBody>
            <button onClick={() => {console.log(`you clicked on ${strDrink}`)}}>Details</button>
          </MDBCard>
        </MDBCol>
        {/* <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard className="align-items-center">
            <MDBCardImage
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg"
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody className="text-center">
              <a href="#!" className="grey-text">
                <h5>Sport wear</h5>
              </a>
              <h5>
                <strong>
                  <a href="#!" className="dark-grey-text">
                    Sweatshirt
                  </a>
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                <strong>139$</strong>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard className="align-items-center">
            <MDBCardImage
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg"
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody className="text-center">
              <a href="#!" className="grey-text">
                <h5>Sport wear</h5>
              </a>
              <h5>
                <strong>
                  <a href="#!" className="dark-grey-text">
                    Grey blouse{" "}
                    <MDBBadge pill color="primary">
                      BEST
                    </MDBBadge>
                  </a>
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                <strong>99$</strong>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard className="align-items-center">
            <MDBCardImage
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg"
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody className="text-center">
              <a href="#!" className="grey-text">
                <h5>Outwear</h5>
              </a>
              <h5>
                <strong>
                  <a href="#!" className="dark-grey-text">
                    Black jacket
                  </a>
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                <strong>219$</strong>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </MDBCol> */}
      {/* </MDBRow> */}
    </section>
  );
}

export default CocktailList;