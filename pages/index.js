import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import React from 'react'
import Card from '@/components/Card'
import Section from '@/components/Section'
import Testimonial from '@/components/Testimonial'

const index = () => {
  return (
    <div>
      <Navbar/>
      <Main/>
      <Card/>
      <Testimonial/>
      <Section/>
    </div>
  )
}

export default index