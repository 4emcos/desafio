import React, { Component} from 'react';
import {Container, Row, Table, Col} from 'react-bootstrap'
import { withRouter } from "react-router";
import "../styles/dashboard.css"
import api from '../../services/api'

class Content extends Component {
  state = {
    equipamentos: [],
    contador : 1
  }

  //Função que pega os equipamentos enviados pelo back para ser mostrado abaixo
  componentDidMount() {
    api.get(`/equipamentos`)
      .then(res => {
        const equipamentos = res.data;
        this.setState({ equipamentos: equipamentos });
      })
  }

  incrementarContador() {

    this.setState((state) => {
      return {contador: state.contador + 1}
    });
  }


  render() {
    return (
      
      <Container id = "content">
        <Row>

             
              <Col>
            
              <Table striped bordered hover>

                <thead>
                  <tr>
                   
                    <th>Equipamento</th>
                    <th>Responsável</th>
                    <th>Categoria</th>
                    <th>Referência</th>
                    <th>Quantidade disponível</th>
                  </tr>
                </thead>
                <tbody>
                {this.state.equipamentos.map(e =>
                  
                  <tr>
                    
                    
                    <td>{e.nome}</td>
                    <td>{e.responsavel}</td>
                    <td>{e.categoria}</td>
                    <td>{e.referencia}</td>
                    <td>{e.quantidade}</td>
                    {}
                  </tr> 
                    

                )}
                </tbody>

                </Table>
                                  
                    
     
              </Col>
        
              
              
        
        </Row>
     </Container>
      
    );
  }
}

export default withRouter(Content);

