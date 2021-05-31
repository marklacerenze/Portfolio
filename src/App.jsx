import React, { useEffect } from 'react'
import Main from './Components/Main'
import 'bootstrap/dist/css/bootstrap.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 2000});
  },[]);

  return (
    <div style={{backgroundColor: "#8AB6D6"}} data-aos='fade-in'>
      <Main></Main>
    </div>
  )
}

export default App;
