import React, {Component} from 'react'
import {Picture} from 'react-responsive-picture'
import skills from '../BodySkills/skills.png'

const BodySkills = () => {
  return (
    <div className='container position-relative mb-4' with='100%'>
      <Picture src={skills} className='img-fluid rounded'/>
    </div>
  )
}

export default BodySkills
