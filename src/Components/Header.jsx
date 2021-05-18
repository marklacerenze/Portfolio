import React from 'react';
import header2 from '../img/header2.png';
import {Picture} from 'react-responsive-picture'
import CvNav from './CvNav'

const Header = () => {
  return (
    <div className='position-relative' with='100%'>
      <Picture src={header2} className='img-fluid'/>
      <CvNav/>
    </div>
  )
}

export default Header;
