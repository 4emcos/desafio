import React, { Component} from 'react';
import { withRouter } from "react-router";
import "../styles/dashboard.css"
import {getName} from '../../services/auth';
import ExampleImage from '../../assets/images/user-example.png'
import {Nav, Figure} from 'react-bootstrap'


class Side extends Component {
    
    toCadastroEquipamento(){
        const { history } = this.props;
        history.push('/cadastrar-equipamento')
    }

    render (){
        

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
                       this.toCadastroEquipamento()
                    }} 
                    > Cadastrar Equipamento</Nav.Link>
                </Nav.Item>
               
                </Nav>
              
            </>
            );

    }
    
  };
  
  const Sidebar = withRouter(Side);
  export default Sidebar