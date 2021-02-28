import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Image } from "react-bootstrap";
import headShot from "./Images/978A0641.jpg";
import linkedIn from "./Images/LI.png";
import gitHub from "./Images/GH.png";

function About() {
  return (
    <div>
      <Container style={{ textAlign: 'left' }}>
        <h1 style={{ paddingLeft: '0', paddingTop: '1rem' }}>About Me</h1>
        <Row>
          <Col md={3}>
            <Image src={headShot} rounded style={{ height: '15rem', width: '11rem', }} />
            <a href="https://www.linkedin.com/in/nboutin" target="_blank" rel="noopener noreferrer"><Image src={linkedIn} style={{ padding: '1rem', height: '5rem', width: '13rem' }} /></a>
            <a href="https://github.com/nboutin109" target="_blank" rel="noopener noreferrer"><Image src={gitHub} style={{ padding: '1rem', height: '5rem', width: '13rem' }} /></a>
          </Col>
          <Col md={9}>
            <span style={{ textAlign: 'left' }}>My name is Nicholas Boutin and I am currently searching for a position to start my career in the technology industry. I am a recent graduate of </span><span style={{ textDecoration: "underline" }}>Georgia Institute of Technology's full-stack web design bootcamp</span><span> and I also posess a Bachelor's in Business Administration from Georgia State University. I currently hold a position at the Coca-Cola Atlanta headquarters as an events/meetings ambassador and previously worked in the hotel industry.</span>
            <p></p>
            <p>My current skillset includes:</p>
            <p style={{textIndent: '1rem'}}>HTML, CSS, and Javascript</p>
            <p style={{textIndent: '1rem'}}>jQuery and bootstrap</p>
            <p style={{textIndent: '1rem'}}>MongoDB and MySQL</p>
            <p style={{textIndent: '1rem'}}>React and Reactstrap (used to make this portfolio)</p>
            <p style={{textIndent: '1rem'}}>Node.js, express, and multiple NPM packages</p>
            <p>If you would like to know more about me you can also</p><a href="https://drive.google.com/file/d/1I0pwWar30BVUy9-WB2yZmC-JeuAd8Sl4/view?usp=sharing"><span>View my full resume here</span></a><p></p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;