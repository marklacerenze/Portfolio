import React from 'react';
import logo from '../Footer/logo.png'
import Navbar from '../Navbar'

const Footer = () => {
  return (
    <div className='d-flex mt-4' style={{backgroundColor: "#eeeeee"}}>
      <div className='container container-fluid row'>
        <div className='text-center mt-3'>
          <p className='font-weight-light'>If you have any questions, do not hesitate to <b>contact me</b>.</p>
          <p><a href='#'><img src={logo} width='3%'/></a>     All rights reserved - 2021</p> 
        </div>
        <Navbar/>
      </div>
    </div>
  );
}

export default Footer;
