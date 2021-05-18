import React from 'react';
import calculator from './Project-Img/calculator.png'
import todolist from './Project-Img/todolist.png'
import localsearch from './Project-Img/localsearch.png'
import game from './Project-Img/game.jpeg'
import first from './Project-Img/first.png'
import login from './Project-Img/login.png'

const BodyProjects = () => {
  return (
    <div className='container container-fluid mr-auto p-3'>
      <div className='row'>
        <div className='container-fluid card' style= {{width: "18rem", border: "1px solid grey"}}>
          <img src={todolist} className='card-img-top mt-3' alt='ToDo-List'/>
          <div className='card-body mt-3'>
            <h5 className='card-title'>ToDo List</h5>
            <p className='card-text'>ToDo-List app with react, in this app you can
            add, delete and edit task.</p>
            <a href='https://github.com/marklacerenze/ToDo-List' className='btn btn-primary s' target='a_blank'>Go to code!</a>
          </div>
        </div>

        <div className='container-fluid card' style= {{width: "18rem", border: "1px solid grey"}}>
          <img src={localsearch} className='card-img-top mt-3' alt='ToDo-List'/>
          <div className='card-body'>
            <h5 className='card-title'>Local Search</h5>
            <p className='card-text'>In this app, i used de jsonplaceholder API to search people by your name, lastname,
            email, etc.</p>
            <a href='https://github.com/marklacerenze/PersonalSearch' className='btn btn-primary' target='a_blank'>Go to code!</a>
          </div>
        </div>

        <div className='container-fluid card' style= {{width: "18rem", border: "1px solid grey"}}>
          <img src={calculator} className='card-img-top mt-3' alt='ToDo-List'/>
          <div className='card-body mt-4'>
            <h5 className='card-title'>Calculator</h5>
            <p className='card-text'>I created a calculator, using JavaScript vanilla.</p>
            <a href='https://github.com/marklacerenze/SimpleCalculatorJS' className='btn btn-primary' target='a_blank'>Go to code!</a>
          </div>
        </div>

        <div className='container-fluid card' style= {{width: "18rem", border: "1px solid grey"}}>
          <img src={game} className='card-img-top mt-3' alt='ToDo-List'/>
          <div className='card-body'>
            <h5 className='card-title'>3 In a Row</h5>
            <p className='card-text'>I created a famous game to play against the console.</p>
            <a href='https://github.com/marklacerenze/Ta-Te-Ti.py' className='btn btn-primary' target='a_blank'>Go to code!</a>
          </div>
        </div>

        <div className='container card mt-3' style= {{width: "18rem", border: "1px solid grey"}}>
          <img src={first} className='card-img-top mt-3' alt='ToDo-List'/>
          <div className='card-body'>
            <h5 className='card-title'>First React App</h5>
            <p className='card-text'>This was my first app using ReactJs.</p>
            <a href='https://github.com/marklacerenze/firstReactApp' className='btn btn-primary' target='a_blank'>Go to code!</a>
          </div>
        </div>

        <div className='container card mt-3' style= {{width: "18rem", border: "1px solid grey"}}>
          <img src={login} className='card-img-top mt-3' alt='ToDo-List'/>
          <div className='card-body'>
            <h5 className='card-title'>First Front-End Login</h5>
            <p className='card-text'>This was my first login using HTML and CSS.</p>
            <a href='https://github.com/marklacerenze/FirstLoginFront' className='btn btn-primary' target='a_blank'>Go to code!</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BodyProjects;
