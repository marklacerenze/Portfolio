import React from 'react'
import {Link, BrowserRouter as Router} from 'react-router-dom'
import English from '../cv/English.pdf'
import Spanish from '../cv/Spanish.pdf'

const CvNav = () => {
  return (
    <div className='container float-right mt-2'>
      <Router>
        <Link 
            className='btn btn-primary text-decoration-none m-auto' 
            to={English} 
            target='a_blank' 
            download>
            English CV</Link>
          
          <Link 
            className='btn btn-primary text-decoration-none' 
            to={Spanish} 
            target='a_blank' 
            download>
            Spanish CV</Link>
      </Router>
    </div>
  )
}

export default CvNav;
