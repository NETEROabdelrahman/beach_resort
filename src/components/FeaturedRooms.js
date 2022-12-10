import React from 'react'
import { useGlobalContext } from '../context'
import Room from './Room'
import Title from './Title'
import Loading from './Loading'
export default function FeaturedRooms() {
  const {featuredRooms,loading} = useGlobalContext() 
  return (
    <>
    
      {loading && <Loading />}
      {!loading &&
      
    <section className='featured-rooms'>
      <Title title='featured rooms'/>
      <div className="featured-rooms-center">
      {featuredRooms.map(room => {
        return <Room key={room.id} {...room} />
      })}
      </div>
    </section>
      }
      </>
  )
}
