import React from 'react'
import { AnimatedTestimonials } from './Certif'
import { Certif } from '../constans/index'

const Certifications = () => {
  // Only render if there are certifications
  if (!Certif || Certif.length === 0) {
    return null
  }

  return (
    <div className="mt-20">
      <h2 className="text-heading mb-12">Certifications</h2>
      <AnimatedTestimonials testimonials={Certif} autoplay={true} />
    </div>
  )
}

export default Certifications
