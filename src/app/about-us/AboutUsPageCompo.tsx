"use client"
import { notFound } from 'next/navigation'
import React from 'react'



const AboutUsCompo = () => {
  return (
    <div>
      About Page
      <button color='primary' onClick={notFound}>
        Error Button
      </button>
    </div>
  )
}

export default AboutUsCompo
