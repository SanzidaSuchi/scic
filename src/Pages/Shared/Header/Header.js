import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from "../../../hooks/useAuth";
import logo from "../../../images/logo.png";

const Header = () => {
  const  {
    allContext,
   } = useAuth();
    const {user, logOut} = allContext;
    const { displayName, photoURL, email } = user;
    const active = {
        color: "#ff136f",
        borderBottom: "2px solid #ff136f",
      };
    const navStyle = {
        textDecoration: "none",
        margin: "0 8px",
        color: "black",
        fontSize: "17px",
        fontWeight: "fw-normal",
        textTransform: "Uppercase",
      };
    return (
        <div>
            
            <>
            <img width="80px" src={ logo } alt="" />
    <Navbar bg="light" variant="light">
    
        <Container className='text-center'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto  align-items-center">
              <Nav.Link as={NavLink} to="/home" 
              style={navStyle}
              activeStyle={active}>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/services" 
              style={navStyle}
              activeStyle={active}>
                MAN
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact" 
              style={navStyle}
              activeStyle={active}>
                WOMEN
              </Nav.Link>
              <Nav.Link as={NavLink} to="/dashboard" 
              style={navStyle}
              activeStyle={active}>
                KIDS
              </Nav.Link>
              <Nav.Link as={NavLink} to="/dashboard" 
              style={navStyle}
              activeStyle={active}>
                EXCLUSIVE
              </Nav.Link>
              <Nav.Link as={NavLink} to="/dashboard" 
              style={navStyle}
              activeStyle={active}>
                ABOUT US
              </Nav.Link>
 
              {!email ? (
                <>
                  <Nav.Link as={NavLink} to="/signup" 
                  style={navStyle}
                  activeStyle={active}>
                    Sign Up
                  </Nav.Link>

                  <Nav.Link  as={NavLink} to="/login"
                  style={navStyle}
                  activeStyle={active}>
                    Log In
                  </Nav.Link>
                </>
              ) : (
                <NavDropdown
                  title={
                    <img
                      style={{
                        width: "45px",
                        borderRadius: "50%",
                      }}
                      src={photoURL}
                      alt=""
                    />
                  }
                >
                  <div className="text-center">
                    <h6>{displayName}</h6>
                    <p className="m-0">{email}</p>
                    <button onClick={logOut} className="btn btn-primary">
                      Sign Out
                    </button>
                  </div>
                </NavDropdown>
              )} 
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
        </div>
    );
};

export default Header;