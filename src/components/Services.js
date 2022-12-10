import React, { useState } from 'react'
import Title from './Title'
import {FaHiking,FaCocktail,FaShuttleVan,FaBeer} from 'react-icons/fa'

const services= [
  {
    icon: <FaCocktail />,
    title: "Free Cocktails",
    info:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
  },
  {
    icon: <FaHiking />,
    title: "Endless Hiking",
    info:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
  },
  {
    icon: <FaShuttleVan />,
    title: "Free Shuttle",
    info:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
  },
  {
    icon: <FaBeer />,
    title: "Strongest Beer",
    info:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
  }
]

export default function Services() {
  const [data,setData] = useState(services)
  return (
    <section className="services">
        <Title title="services" />
        <div className="services-center">
          {data.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
  )
}
