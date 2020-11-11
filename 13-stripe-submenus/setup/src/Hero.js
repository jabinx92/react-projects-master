import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import phoneImg from './images/phone.svg'

const Hero = () => {
  return (
    <>
      <h1>
      Payments infrastructure
      for the internet
      </h1>
      <h4>
      Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.
      </h4>
      
      <p>
        Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.
      <Button variant="dark">Dark</Button>{' '}
      </p>

      <img src={phoneImg}></img>
    </>
  )


}

export default Hero
