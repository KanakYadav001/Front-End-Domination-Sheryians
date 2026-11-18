import React from 'react'

import "../index.css"

const Card = () => {
    const name  = "kanak"
    const age = 20
  return (
    <>
    
    <div className='card'>
      <p>
        Hello my name is {name}
        currently i am {age} year old
      </p>
          </div>
    </>
  )
}

export default Card

