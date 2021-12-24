import React, { useEffect, useState } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import Gift from "../../../images/g1.jpg";
import Service from '../Service/Service';
import Testmonial from './../Testmonial/Testmonial';


const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://stark-mountain-90454.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
    return (
        <div>
            <Container>
            <Row>
                <Col sm={4}>
                    
                <img width="300px" height="500px" src={ Gift } alt="" />  
                </Col>
                <Col sm={8}>
                    
                <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block h-25 w-100"
            src="https://i.ibb.co/rkzrfGr/Young-handsome-man-in-classic-suit-over-the-blurred-lake-buttoning-his-jacket.jpg"
            alt=""
          />
          <Carousel.Caption>
            <h3 className="text-primary">..</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block h-25 w-100"
            src="https://i.ibb.co/Y8spfGR/c2.jpg"
            alt=""
          />

          <Carousel.Caption>
            <h3 className="text-primary">..</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block h-25 w-100"
            src="https://i.ibb.co/60bQdWW/c3.jpg"
            alt=""
          />

          <Carousel.Caption>
            <h3 className="text-primary">..</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>   
                </Col>
                
            </Row>
            </Container>
            <Container className="py-2">
          <h2 className="text-center text-white mb-0">Our All Services</h2>
          <p className="my-4 mt-2 text-center text-muted fs-5">
            New Arrival
          </p>
        <Row>
          {services?.map((service) => (
            <Service service={service} key={service.key}></Service>
            
          ))}
        </Row>
      </Container>
      <Testmonial></Testmonial> 
        </div>
    );
};

export default Home;









