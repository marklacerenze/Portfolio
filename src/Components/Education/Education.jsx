import React from 'react'
import formalEducation from '../Education/formalEducation.png'
import EdUni from './EducationUniversity/EdUni'

const Education = () => {
  return (
    <div className='m-auto'>
      <div className='container mb-2 mt-4'>
        <a href='http://mdp.utn.edu.ar/' alt='utn-web'>
          <img src={formalEducation} width='100%' height='0%' className='rounded'/>
        </a>
      </div>
      <EdUni/>
    </div>
  )
}

export default Education;
