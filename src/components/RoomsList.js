import React from 'react'
import { useGlobalContext } from '../context'
import Room from './Room'
import Title from './Title'

export default  function RoomsList(){
  const { sortedRooms } = useGlobalContext() 
  //console.log(sortedRooms.length)
  return (
    <>
    {sortedRooms.length===0&&<div className="empty-search">
        <h3>unfortunately no rooms matched your search parameters</h3>
      </div>}
    
    <section className='roomslist'>
      
      <div className="roomslist-center">
      {sortedRooms.map(room => {
        return <Room key={room.id} {...room} />
      })}
      </div>
      </section>
      

      </>
  )
}
