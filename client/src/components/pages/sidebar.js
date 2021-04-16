import React from "react";
import {Nav, Figure} from "react-bootstrap";
import { withRouter } from "react-router";
import "../styles/dashboard.css"
import {getName} from '../../services/auth';
import ExampleImage from '../../assets/images/user-example.png'


const Side = () => {




    return (
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
            
            <Nav.Item>
                <Nav.Link href="">Equipamentos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link onClick= {() => {
                    document.getElementById("content").style.visibility = "hidden";
                    document.getElementById("requisicoes").style.visibility = "visible";
                }} 
                > Requisicoes</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick= {() => {
                    document.getElementById("content").style.visibility = "hidden";
                    document.getElementById("equipamento").style.visibility = "visible";
                }} 
                > Cadastrar Equipamento</Nav.Link>
            </Nav.Item>
           
            </Nav>
          
        </>
        );
  };
  
  const Sidebar = withRouter(Side);
  export default Sidebar