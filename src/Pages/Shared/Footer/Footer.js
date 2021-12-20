import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className="bg-dark text-white pt-5">
            <Container>
            <Row>
               
            <Col xs={6}>
            <ul className="list-unstyled">
            <h5>CONTACT</h5>
            
                <li>
                    <span className="ms-1 fs-5">
                    Head Office: 20 Kunipara, Tejgaon,
                    Dhaka-1208,Bangladesh
                    </span>
                </li>
                <li>
                <span className="ms-1 fs-5">
                            Phone: +88 02-8879115
                </span>
                <br />
                <span className="ms-1 fs-5">
                Email: artisanoutfittersltd@gmail.com
                </span>
                </li>
            </ul>
            </Col>
            <Col xs={6}>
            <ul className="list-unstyled">
            <h5>COMPANY</h5>
            <li>
                  <NavLink to="/about">About US</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">BRANCHES</NavLink>
                </li>
            </ul>
            </Col>
        </Row>
        </Container>
        <p className="text-center m-0 py-3 copyright">
        Copyright © 2021 artisan-outfitters ltd
      </p>
        </div>
        
        </div>
    );
};

export default Footer;