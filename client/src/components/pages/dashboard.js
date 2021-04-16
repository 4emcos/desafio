import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import { withRouter } from "react-router";
import Sidebar from "./sidebar";
import Navbar from './navbar.js'
import Content from './content'


import "../styles/dashboard.css"

const Dash = props => {
   

    return (
        <>
         <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">      
                    <Sidebar />
                    </Col>
                    <Col  xs={10} id="page-content-wrapper">
                    <Navbar/>
                    <br/>
                    <Content />

                    </Col> 
                </Row>

            </Container>
        </>
        );
  };
  const Dashboard = withRouter(Dash);
  export default Dashboard