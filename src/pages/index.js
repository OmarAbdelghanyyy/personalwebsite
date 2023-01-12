import React from 'react';
import {Grid} from '@mui/material/';
import '../Styles/home.css';  


  //TODO: Add a description about who i am and what my skills are like what languages and all that
  //TODO: create a css file this component
const Home = () => {
  return (
    <div className="home">
      <div className="introduction">
      <h2>Hi, My Name is Omar</h2>
      <div className='phrase'>
        <p className='description'>A Software Engineering student at the University of Ottawa with a passion for learning and creating</p>
      </div>
      </div>
  
        <h1 className="title">SkillSet</h1 >
        <Grid id="skills" container alignItems="center" justifyContent="center">
          <Grid className='skillitem'>
          <span className="fa-stack fa-2x">
             <i className="fa-brands fa-python fa-stack-1x" style={{zIndex: "1"}}></i>
              <i id= "pycircle" className="fa-solid fa-circle  fa-stack-2x"></i>
          </span> 
          <p className='name'>Python</p>

          </Grid >
          <Grid className='skillitem'>
          <span className="fa-stack fa-2x">
             <i className="fa-brands fa-java fa-stack-1x"  style={{zIndex: "1"}}></i>
              <i  id= "javacircle"className="fa-solid fa-circle  fa-stack-2x"></i>
          </span> 
          <p className='name'>Java</p>

          </Grid >
          <Grid className='skillitem'>
          <span className="fa-stack fa-2x">
             <i className="fa-brands fa-html5 fa-stack-1x"  style={{zIndex: "1"}}></i>
              <i id ="htmlcircle"className="fa-solid fa-circle  fa-stack-2x"></i>
          </span> 
          <p className='name'>HTML</p>
          </Grid >
          <Grid className='skillitem'>
          <span className="fa-stack fa-2x">
             <i className="fa-brands fa-css3 fa-stack-1x"  style={{zIndex: "1"}}></i>
              <i id ="csscircle"className="fa-solid fa-circle  fa-stack-2x"></i>
          </span> 
          <p className='name'>CSS</p>

          </Grid >

          <Grid className='skillitem'>
          <span className="fa-stack fa-2x">
             <i className="fa-brands fa-js fa-stack-1x" style={{zIndex: "1"}} ></i>
              <i id ="jscircle"className="fa-solid fa-circle  fa-stack-2x"></i>
          </span> 
          <p className='name'>JavaScript</p>
          </Grid >

          
          <Grid className='skillitem'>
          <span className="fa-stack fa-2x">
             <i className="fa-brands fa-react fa-stack-1x"  style={{zIndex: "1"}}></i>
              <i id ="reactcircle" className="fa-solid fa-circle fa-stack-2x"></i>
          </span> 
          <p className='name'>React</p>
          </Grid >
        </Grid>
      </div>
  );
};
  
export default Home;