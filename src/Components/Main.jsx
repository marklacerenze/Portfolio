import React from 'react'
import Header from './Header'
import Body from './Body';
import Footer from './Footer/Footer'

const Main = () => {
  return (
    <div className=''>
      <Header/>
      <Body/>
      <Footer className='container'/>
    </div>
  )
}

export default Main;
