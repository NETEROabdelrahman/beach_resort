import React from 'react'
import { useGlobalContext } from '../context'
import Title from './Title';

export default function RoomsFilter({ rooms }) {

  const newSet1 = new Set(['all',...rooms.map(room=>room.type)])
  const newSet2 = new Set([...rooms.map(room => room.capacity)])
  
  console.log([...newSet1])
  console.log([...newSet2])
  const { 
    type,
    capacity,
    price,
    size,
    minPrice,
    maxPrice,
    maxSize,
    minSize,
    breakfast,
    pets,
    handleChange,
    
    
  } = useGlobalContext();
  return (
    <section className='filter-container'>
      <Title title='serach rooms'/>
      <form className='filter-form'>
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select className='form-control' name='type' id='type' value={type} onChange={ handleChange  }>
          {[...newSet1].map((single, index) => {
              return (
                <option value={single} key={index}>
                  {single}
               </option>
             )
           })}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="capacity">guests</label>
          <select className='form-control' name='capacity' id='capacity' value={capacity} onChange={ handleChange  }>
          {[...newSet2].map((single, index) => {
              return (
                <option  value={single} key={index}>
                  {single}
               </option>
             )
           })}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="price">price ${price }</label>
          <input min={minPrice} max={maxPrice} type='range' className='form-control' name='price' id='price' value={price} onChange={ handleChange  }>
          </input>
        </div>

        <div className="form-group">
          <label htmlFor="size">room size</label>
          <input min={minSize} max={maxSize} type='range' className='form-control' name='size' id='size' value={size} onChange={ handleChange  }>
          </input>
        </div>

        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id='pets'
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>

        </form>
    </section>
  )
}
