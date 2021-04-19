import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import { withRouter } from "react-router";


const Navtop = () => {

    return (
        <>
            <Navbar bg="light">
            <Navbar.Brand href="#home">Sistema de consulta de equipamentos</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              
            </Nav>
            
            <Nav inline>
     
               
            </Nav>
            
            </Navbar.Collapse>
            </Navbar>
          
        </>
        );
  };
  
  const Navbartop = withRouter(Navtop);
  export default Navbartop