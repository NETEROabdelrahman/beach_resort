import React from 'react'
import { Link } from 'react-router-dom'

export default function Room({name,images,price,slug}) {
  return (
    <article className='room'>
      <div className="img-container">

        <img src={images[0]} alt="single room" />
        <div className="price-top">
          <h6>{price}$</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className='btn-primary room-link'>
          features
        </Link>
      </div>
      <div className="room-info">
        {name}
      </div>
    </article>
  )
}
