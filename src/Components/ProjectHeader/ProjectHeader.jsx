import React, { Component } from 'react';
import project from '../ProjectHeader/project.png';

const ProjectHeader = () => {
  return (
    <div className='container'>
      <a href='https://github.com/marklacerenze' target='a_blank'>
        <img src={project} width='100%' height='0%'/>
      </a>
    </div>
  );
}


export default ProjectHeader;
