import React from 'react'
import { useGlobalContext } from '../context'
import Loading from './Loading'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'

export default function RoomsContainer() {
  const { rooms,loading  } = useGlobalContext()
  //console.log(rooms)
  return (
    <>
      {loading&&<Loading/>}
      {!loading && <>
      <RoomsFilter rooms={rooms} />
      <RoomsList/>
      
      </>}
    </>
  )
}
