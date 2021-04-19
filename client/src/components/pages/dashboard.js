import React, { Component} from 'react';
import {Container, Nav, Figure, Row, Col} from "react-bootstrap";
import { withRouter } from "react-router";
import {getName} from '../../services/auth';
import ExampleImage from '../../assets/images/user-example.png'

import Requisicoes from './requisicoes'
import Navbar from './navbar.js'
import Content from './content'
import CadastrarEquipamento from './cadastrar-equipamentos'

import "../styles/dashboard.css"

var teste = false;

class Dash extends Component{
    constructor() {
        super();
        this.state = {pagina: <Content/>};
    
    }


    toPage(pagina){
        if (pagina == 'equipamentos'){
            this.setState({ pagina : <Content/>})
        }
        if (pagina == 'cadastrar') {
            this.setState({ pagina : <CadastrarEquipamento/>})
        }
        if (pagina == 'requisicoes'){
            this.setState({ pagina : <Requisicoes/>})
        }
     
    }

    render (){
        return (
            <>
             <Container fluid>
                    <Row>
                        <Col xs={2} id="sidebar-wrapper">      
                         <>
                    
                            <Nav fill className="col-md-2 d-none d-md-block bg-light sidebar">
                        
                            <Nav.Item>
                                <Nav.Link eventKey="disabled" disabled>
                                <Figure>
                                    <Figure.Image
                                        width={150}
                                        height={150}
                                        alt="171x180"
                                        src= {ExampleImage}
                                
                                    />
                            </Figure> 
                                </Nav.Link>
                            </Nav.Item>
                
                            <Nav.Item>
                                <Nav.Link eventKey="disabled" disabled>
                                {getName().toUpperCase()}   
                
                                </Nav.Link>
                            </Nav.Item>
                            
                            <Nav.Item onClick= {() => {
                                  this.toPage('equipamentos')
                                }} 
                                >
                                <Nav.Link href="">Equipamentos</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link onClick= {() => {
                                  this.toPage('requisicoes')
                                }} 
                                > Requisicoes</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick= {() => {
                                    this.toPage('cadastrar')
                                }} 
                                > Cadastrar Equipamento</Nav.Link>
                            </Nav.Item>
                        
                            </Nav>
                        
                        </>
                        </Col>
                        <Col  xs={10} id="page-content-wrapper">
                        <Navbar/>
                        <br/>
                        {this.state.pagina}
    
                        </Col> 
                    </Row>
    
                </Container>
            </>
            );
    }
    
  };
  const Dashboard = withRouter(Dash);
  export default Dashboard