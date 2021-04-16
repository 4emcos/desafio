import React, { Component} from 'react';
import {Container, Row, Card, Col} from 'react-bootstrap'
import { withRouter } from "react-router";
import "../styles/dashboard.css"
import api from '../../services/api'

class Content extends Component {
  state = {
    equipamentos: []
  }

  //Função que pega os equipamentos enviados pelo back para ser mostrado abaixo
  componentDidMount() {
    api.get(`/equipamentos`)
      .then(res => {
        const equipamentos = res.data;
        this.setState({ equipamentos: equipamentos });
      })
  }


  render() {
    return (
      
      <Container id = "content">
        <Row>
              {this.state.equipamentos.map(e =>
              
              <Col>
              <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title> Equipamento: {e.nome}</Card.Title>
                <Card.Subtitle className="mb-2"> Responsável: {e.responsavel}</Card.Subtitle>
                <Card.Text>

                    <li>Categoria: {e.categoria}</li>
                    <li>Referência: {e.referencia}</li>
                    <li>Quantidade disponível: {e.quantidade}</li>
                </Card.Text>
               
              </Card.Body>
            </Card>
                   
                    
                    
                    </Col>
              )}
              
              
              
        
        </Row>
     </Container>
      
    );
  }
}

export default withRouter(Content);

