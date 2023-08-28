import React from 'react'
import { Container } from 'react-bootstrap'

const Subscribe = () => {
  return (
    <div className='bg-subscribe font__space__grotesk text-white py-5 text-center'>
        <Container className=''>
        <h1>Join Our Community</h1>
        <p className='my-4'>Meet the Team, artists and collections for problem updates, announcements, and more</p>
        <button className="btn__custom border-white border border-2">Create Now</button>
        </Container>
    </div>
  )
}

export default Subscribe