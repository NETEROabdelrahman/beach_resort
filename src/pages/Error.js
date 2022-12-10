import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import Hero from '../components/Hero'

export default function Error() {
  return (
    <>
      <Hero>
        <Banner title='error 404' subtitle='page not found'>
            <Link className="btn-primary" to='/'>return home</Link>
        </Banner>
    </Hero>
    </>
  )
}
