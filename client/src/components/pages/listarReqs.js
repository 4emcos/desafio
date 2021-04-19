import React, { Component} from 'react';
import {Container, Row, Table, Col} from 'react-bootstrap'
import { withRouter } from "react-router";
import "../styles/dashboard.css"
import api from '../../services/api'

class ListarReqs extends Component {
  state = {
    equipamentos: [],
    contador : 1
  }

  //Função que pega os equipamentos enviados pelo back para ser mostrado abaixo
  componentDidMount() {
    api.get(`/requisicoes`)
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
                   
                    <th>Nome do Requisitante</th>
                    <th>Quantidade</th>
                    <th>Referência do Equipamento</th>
                   
                  </tr>
                </thead>
                <tbody>
                {this.state.equipamentos.map(e =>
                  
                  <tr>
                    <td>{e.nomeRequisitante}</td>
                    <td>{e.quantidadeEquipamento}</td>
                    <td>{e.refEquipamento}</td>
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

export default withRouter(ListarReqs);

