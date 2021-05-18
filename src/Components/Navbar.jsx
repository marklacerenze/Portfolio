import React from 'react'
import {
  BrowserRouter as Router,
  Link} from 'react-router-dom';
import {SocialIcon} from 'react-social-icons'
import up from './Footer/img/up.png'

const Navbar = () => {
  return (
    <div style={{backgroundColor: "#eeeeee"}}>
      <nav className='container navbar mb-3'>
        <Router>
          <Link 
            to={{pathname:'https://github.com/marklacerenze'}} 
            className='btn text-decoration-none text-warning p-1 mr-auto' 
            target='blank'>
            <SocialIcon url='https://github.com/marklacerenze' className='m-1'/>
            GitHub</Link>

          <Link 
            to={{pathname:'https://www.linkedin.com/in/marklacerenze/'}} 
            className='text-decoration-none p-1 mr-auto text-warning' 
            target='blank'>
            <SocialIcon url='https://www.linkedin.com/in/marklacerenze/' className='m-1'/>
            LinkedIn</Link>
          
          <Link 
            to={{pathname:'https://instagram.com/marklacerenze/'}} 
            className='text-decoration-none mr-auto p-1 text-warning' 
            target='blank'>
            <SocialIcon url='https://instagram.com/marklacerenze' className='m-1'/>
            Instagram</Link>

          <Link 
            to={{pathname:'mailto:marklacer@gmail.com'}} 
            className='text-decoration-none mr-auto p-1 text-warning' 
            target='blank'>
            <SocialIcon network='google' className='m-1'/>
            E-mail</Link>

          <Link 
            to={{pathname:'https://twitter.com/marklacerenze'}} 
            className='text-decoration-none mr-auto p-1 text-warning' 
            target='blank'>
            <SocialIcon url='https://twitter.com/marklacerenze' className='m-1'/>
            Twitter</Link>

            <a href='#'
            className='text-decoration-none mr-auto p-1 text-warning'>
              <img src={up} />
            Up</a>
        </Router> 
      </nav>
    </div>
  )
}

export default Navbar;
