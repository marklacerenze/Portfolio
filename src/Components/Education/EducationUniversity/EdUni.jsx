import React from 'react'
import logoUTN from '../EducationUniversity/logoUTN.png'

const EdUni = () => {
  return (
    <div className='container d-flex'>
      <div className='container'>
        <img src={logoUTN} width='80%' alt='logo-utn' className='img-fluid'/>
      </div>

      <div className='card p-1' style={{backgroundColor: "#fff"}}>
        <h5>Marcos is a student at the National Technological University in the City of Mar del Plata, Argentina. 
        He will graduate this year (2021) as a University Technician in Programming. He has a total average of 
        8.60 from all the subjects he has taken. The programming languages taught by the university are: C, Java 
        and PHP. They also work with databases like MySQL.</h5>
      </div>
    </div>
  )
}

export default EdUni;
